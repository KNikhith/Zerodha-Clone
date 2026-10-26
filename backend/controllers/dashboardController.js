import { getDashboardData } from "../services/dashboardService.js";

export const getDashboard = async (req, res) => {
  try {
    const dashboard = await getDashboardData(req.user._id);

    res.status(200).json({
      success: true,
      ...dashboard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};