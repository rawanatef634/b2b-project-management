import { ErrorRequestHandler } from "express";

export const errorHandler:ErrorRequestHandler = (error, req, res, next) => {
    return res.status(500).json({ 
        message: "Internal Server error",
        error: error.message });
}