import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";
import { AppError } from "../utils/appError";

export const errorHandler:ErrorRequestHandler = (
    error, 
    req, 
    res, 
    next
) : any => {
    console.log(`Error occurred on PATH: ${req.path}`, error);
    
    if (error instanceof SyntaxError) {
        return res.status(HTTPSTATUS.BAD_REQUEST).json({
            message: "Invalid JSON format. Please check your request body",
            error: error?.message
        })
    }
    if (error instanceof AppError) {
        return res.status(error.statusCode).json({
            message: error.message,
            errorCode: error.errorCode
        })
    }
    return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({ 
        message: "Internal Server error",
        error: error?.message  || "Unknown error occurred"
    });
}