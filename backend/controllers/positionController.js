import {
  getUserPositions,
  closeUserPosition,
} from "../services/positionService.js";

export const getPositions = async (req, res) => {
  try {
    const positions = await getUserPositions(req.user._id);

    res.status(200).json({
      success: true,
      positions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const closePosition = async (req, res) => {
  try {
    await closeUserPosition(req.user._id, req.params.id);

    res.status(200).json({
      success: true,
      message: "Position closed successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};