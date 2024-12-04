import { verifyToken } from "@clerk/backend";
import { Request, Response } from "express";

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: any
) {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "Unauthorized: Please Signin/Login" });
  }
  const authToken = req.headers.authorization?.replace("Bearer ", "");
  try {
    console.log(process.env.VITE_CLERK_PUBLISHABLE_KEY);
    const verifiedToken = await verifyToken(authToken, {
      jwtKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
    });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Please Signin/Login" });
  }
}
