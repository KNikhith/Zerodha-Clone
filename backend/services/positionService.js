import Position from "../models/Position.js";

export const getUserPositions = async (userId) => {
  return await Position.find({
    user: userId,
  });
};

export const closeUserPosition = async (userId, positionId) => {
  const position = await Position.findOne({
    _id: positionId,
    user: userId,
  });

  if (!position) {
    throw new Error("Position not found");
  }

  await position.deleteOne();

  return position;
};