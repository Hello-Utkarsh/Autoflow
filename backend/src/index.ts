import { verifyToken } from "@clerk/backend";
import "dotenv/config";
import { Request, Response } from "express";
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// @ts-ignore
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// @ts-ignore
app.get("/bye", (req, res) => {
  res.json({ message: "Bye World!" });
});

app.get("/protected", (req: any, res: any) => {
  res.json({ message: "This is a protected route" });
});

app.listen(port, () => {
  console.log("connected");
});
