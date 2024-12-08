import { verifyToken } from "@clerk/backend";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import fs from "fs";

export default async function authMiddleware(
  req: Request,
  res: Response,
  next: any
) {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Please Signin/Login" });
  }
  const authToken = req.headers.authorization?.replace("Bearer ", "");
  try {
    const publicKey = fs.readFileSync("key.pem", "utf8");
    const verifiedToken = await verifyToken(authToken, {
      jwtKey: publicKey,
    });
    const decoded = jwt.verify(authToken, publicKey, { algorithms: ["RS256"] });
    req.body.userid = decoded.sub;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Please Signin/Login" });
  }
}
