import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Room can't be empty"],
  },
  createdAt: {
    type: Date,
    default: new Date().toUTCString(),
  },
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
