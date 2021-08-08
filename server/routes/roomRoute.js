import express from "express";
import {
  createRoom,
  getOneRoom,
  getRooms,
} from "../controllers/roomController.js";
const router = express.Router();
import messageRoute from "./messageRoute.js";

// app.get("/api/v1/rooms",roomRoute);

router.use("/:roomId/messages", messageRoute);
router.route("/").get(getRooms).post(createRoom);
router.route("/:roomId").get(getOneRoom);

export default router;
