import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  userId: String,
  username: String, ///from frontend
  message: {
    type: String,
    required: [true, "message can't be empty"],
  },
  room: {
    type: mongoose.Schema.ObjectId,
    ref: "Room",
    required: [true, "Messages must belongs to a room"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

messageSchema.pre(/^find/, function (next) {
  this.populate({
    path: "room",
    select: "name _id",
  });
  next();
});
const Message = mongoose.model("Message", messageSchema);
export default Message;
