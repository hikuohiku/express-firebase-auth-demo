import { firebaseAdmin } from "@/src/firebase";
import { Request, Response, NextFunction } from "express";

const authorizationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ error: "Authorization header is missing or invalid" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    console.log(decodedToken);
    next();
  } catch (error) {
    console.error("Error verifying token", error);
    res.status(401).json({ error: "Invalid token" });
  }
};

export { authorizationMiddleware };
