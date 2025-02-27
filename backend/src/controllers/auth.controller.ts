import { Express, NextFunction, Request, Response } from "express";
import { config } from "../config/app.config";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { registerSchema } from "../validation/auth.validation";
import { registerUserService } from "../services/auth.service";
import { HTTPSTATUS } from "../config/http.config";
import passport from "passport";

export const googleLoginCallback = asyncHandler(
    async (req: Request, res: Response) => {
        const currentWorkspace = req.user?.currentWorkspace;

        if (!currentWorkspace) {
            return res.redirect(
                `${config.FRONTEND_GOOGLE_CALLBACK_URL}?status=failure`
            )
    }

        return res.redirect(
            `${config.FRONTEND_ORIGIN}/workspace/${currentWorkspace}`
        )
    }
)
export const registerUserController  = asyncHandler(
    async (req: Request, res: Response) => {
        const body = registerSchema.parse({
            ...req.body,
        });

        await registerUserService(body);

        return res.status(HTTPSTATUS.CREATED).json({
            message: "User registered successfully",
        })
    }
)

export const loginController  = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate(
            "local",
            (
                err: Error | null,
                user: Express.User | false,
                info: { message: string } | undefined 
            ) => {
                if (err) {
                    return next(err);
                }

                if (!user) {
                    return res.status(HTTPSTATUS.UNAUTHORIZED).json({
                        message: info?.message || "Invalid email or password",
                    });
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return next(err);
                    }

                    return res.status(HTTPSTATUS.OK).json({
                        message: "User logged in successfully",
                        user
                    });

                })
            }
        ) (req, res, next)
    }
)
export const logOutController = asyncHandler(
    async (req: Request, res: Response) => {
        req.logOut((err) => {
            if (err) {
                return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
                    message: "Failed to log out user",
                    error: err?.message,
                });
            }
        })
        req.session = null;

        return res.status(HTTPSTATUS.OK).json({
            message: "User logged out successfully",
        })
    }
)