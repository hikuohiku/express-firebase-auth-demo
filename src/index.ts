import express from "express";
import { authorizationMiddleware } from "@/src/authorization";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/protected", authorizationMiddleware, (req, res) => {
  res.send("Welcome to protected route!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
