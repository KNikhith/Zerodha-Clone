import {
  getUserHoldings,
  getHoldingSummary,
} from "../services/holdingService.js";

export const getHoldings = async (req, res) => {
  try {
    const data = await getHoldingSummary(req.user._id);

    res.status(200).json({
      success: true,
      ...data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getHoldingById = async (req, res) => {
  try {
    const holdings = await getUserHoldings(req.user._id);

    const holding = holdings.find(
      (item) => item._id.toString() === req.params.id
    );

    if (!holding) {
      return res.status(404).json({
        success: false,
        message: "Holding not found",
      });
    }

    res.status(200).json({
      success: true,
      holding,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};