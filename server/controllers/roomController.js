import Room from "../models/roomModel.js";

export const createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);

    res.status(201).json({
      data: newRoom,
      message: "successfully created new room",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong. PLease try again later!",
    });
  }
};

export const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().sort({ createdAt: -1 });
    res.status(201).json({
      data: rooms,
      message: "successfully get all rooms",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong.",
    });
  }
};
export const getOneRoom = async (req, res) => {
  try {
    const foundRoom = await Room.find({ _id: req.params.roomId });
    res.status(201).json({
      data: foundRoom,
      message: "successfully get all rooms",
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong.",
    });
  }
};
