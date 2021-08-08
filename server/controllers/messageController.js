import Message from "../models/messageModel.js";

export const setMsgUserId = (req, res, next) => {
  // console.log(req.params.roomId);
  // console.log(req.userId);
  if (!req.body.room) req.body.room = req.params.roomId; //PostId from URL
  // if (!req.body.userId) req.body.userId = req.userId; //UserId from auth middleware, token
  next();
};
export const createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);

    res.status(201).json({
      data: newMessage,
      message: "successfully created new message",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Something went wrong. PLease try again later!",
    });
  }
};
//https://docs.mongodb.com/manual/reference/operator/meta/orderby/
export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.roomId }).sort({
      createdAt: -1,
    });
    res.status(201).json({
      data: messages,
      message: "successfully get all messages",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong.",
    });
  }
};
