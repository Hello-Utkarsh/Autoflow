import "dotenv/config";
import chat from "./routes/chat";
import authMiddleware from "./middleware";
import message from "./routes/message";
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");

const corsOptions = {
  origin: "*",
};
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/chat", authMiddleware, chat);
app.use("/message", authMiddleware, message);

app.listen(port, () => {
  console.log("connected");
});
