import { Request, Response } from "express";
import { query } from "../db";
const express = require("express");
const chat = express.Router();

chat.get("/", async (req: Request, res: Response) => {
  try {
    const { userid } = await req.body;
    if (!userid) {
      return res
        .status(400)
        .json({ message: "Please provide the required data" });
    }
    const getUserChat = `
          SELECT * FROM chat WHERE userid=$1`;
    const runQuery = await query(getUserChat, [userid]);
    return res.status(200).json({ message: "Success", data: runQuery.rows });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Some error occured, please try again" });
  }
});

chat.delete("/", async (req: Request, res: Response) => {
  try {
    const { userid, chatid } = await req.body;
    if (!userid || !chatid) {
      return res
        .status(400)
        .json({ message: "Please provide the required data" });
    }
    const deleteUserChat = `
        DELETE FROM chat WHERE userid=$1 AND id=$2 RETURNING *`;
    const runQuery = await query(deleteUserChat, [userid, chatid]);
    return res.status(200).json({ message: "Success", data: runQuery.rows });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Some error occured, please try again" });
  }
});

chat.post("/", async (req: Request, res: Response) => {
  try {
    const { userid, name } = await req.body;
    if (!userid || !name) {
      return res
        .status(400)
        .json({ message: "Please provide the required details" });
    }
    const currentTime = new Date();
    const createTable = `
        INSERT INTO chat(userid, created, name) VALUES ($1, $2, $3) RETURNING *`;
    const runQuery = await query(createTable, [userid, currentTime, name]);
    return res.status(200).json({ message: "Success", data: runQuery.rows });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Some error occured, please try again" });
  }
});

chat.put("/", async (req: Request, res: Response) => {
  try {
    const { userid, id, name } = await req.body;
    if (!name || !id) {
      return res.status(404).json({ message: "Please the required data" });
    }
    const updateUserChat = `
          UPDATE chat SET name=$1 WHERE userid=$2 and id=$3 RETURNING *`;
    const runQuery = await query(updateUserChat, [name, userid, id]);
    return res.status(200).json({ message: "Success", data: runQuery.rows });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Some error occured, please try again" });
  }
});

export default chat;
