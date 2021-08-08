import express from "express";
import {
  createMessage,
  getMessages,
  setMsgUserId,
} from "../controllers/messageController.js";
// import auth from "../controllers/authController.js";
const router = express.Router({ mergeParams: true });

// app.get("/api/v1/rooms/:roomId/messages",roomRoute);

router.route("/").get(getMessages).post( setMsgUserId, createMessage);
export default router;
