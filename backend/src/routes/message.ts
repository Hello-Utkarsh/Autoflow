import { Request, Response } from "express";
import { query } from "../db";
const express = require("express");
const message = express.Router();

message.get("/", async (req: Request, res: Response) => {
  try {
    const { chatid } = req.params;
    const { userid } = await req.body;
    if (!userid || !chatid) {
      return res
        .status(404)
        .json({ message: "Please provide the required data" });
    }
    const getUserMessage = `
        SELECT message WHERE userid=$1 AND chatid=$2`;
    const runQuery = query(getUserMessage, [userid, chatid]);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Some error occured, please try again" });
  }
});

message.post("/", async (req: Request, res: Response) => {
  try {
    const {chatid} = req.query
    const { userPrompt, userid } = await req.body;
    if (!userid) {
      return res
        .status(404)
        .json({ message: "Unauthorized: PLease Login/Signin" });
    }
    if (!chatid) {
      return res.status(404).json({ message: "Please select a chat" });
    }
    if (!userPrompt) {
      return res.status(404).json({ message: "Please provide a prompt" });
    }
    /* 
    Fetch model and generate a response here
    */
    const modelResponse = ``;

    const currentTime = new Date();
    const postUserMessage = `
        INSERT INTO message(userid, created, chatid, content) VALUES($1, $2, $3, $4)`;
    const runQuery = await query(postUserMessage, [
      userid,
      currentTime,
      chatid,
      `${JSON.stringify({ prompt: userPrompt, response: modelResponse })}`,
    ]);
    return res.json({ message: runQuery.rows[0] });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: "Some error occured, please try again" });
  }
});

export default message;
