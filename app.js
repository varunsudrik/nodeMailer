import express from "express";
const app = express();
import { sendMail } from "./controllers/sendMail.js";

app.get("/", (req, res) => {
  res.send("Node");
});

app.get("/sendmail", sendMail);

app.listen(4000, () => {
  console.log("listening on 4000");
});
