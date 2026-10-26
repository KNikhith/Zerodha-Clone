import Stock from "../models/Stock.js";

export const getStocks = async (req, res) => {
  try {
    const stocks = await Stock.find({ active: true })
      .select("symbol name price change percent isDown")
      .sort({ symbol: 1 });

    res.status(200).json({
      success: true,
      stocks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const searchStocks = async (req, res) => {
  try {
    const search = req.query.search || "";

    const stocks = await Stock.find({
      $or: [
        {
          symbol: {
            $regex: search,
            $options: "i",
          },
        },
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
      ],
      active: true,
    })
      .select("symbol name price percent isDown")
      .limit(20);

    res.status(200).json({
      success: true,
      stocks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    res.status(200).json({
      success: true,
      stock,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};