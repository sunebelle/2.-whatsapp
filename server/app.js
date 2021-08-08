//https://dashboard.pusher.com/apps/1246738/getting_started
//https://pusher.com/tutorials/realtime-spreadsheets-part-1
import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";
import cors from "cors";
import roomRoute from "./routes/roomRoute.js";
import realtimePusher from "./utils/pusher.js";
const app = express();
dotevn.config();

app.use(cors()); // web dev simplied cors
app.use(express.json());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   next();
// });

const DB_URL = process.env.DB.replace("<password>", process.env.DB_PASS);
mongoose.connect(
  // "mongodb://localhost/whatsappDB",
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("mongoose connected")
);

realtimePusher("rooms", "roomChannel", "inserted");
realtimePusher("messages", "messagesChannel", "inserted");

app.use("/api/v1/rooms", roomRoute);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is listening on the port ${port}`);
});

//nodemon --inspect app.js
