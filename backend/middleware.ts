import { NextFunction, Request, Response } from "express";


export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
     const token = req.headers["x-api-key"]
     if (token != process.env.token) {
     res.status(401).json({succcess: false, message: "Unauthorized request"})
    } else {next()}
}