import mongoose from "mongoose";
import Order from "../models/Order.js";
import Holding from "../models/Holding.js";
import Position from "../models/Position.js";
import Stock from "../models/Stock.js";

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    })
      .populate("stock")
      .sort({ createdAt: -1 });

    const formattedOrders = orders.map((order) => ({
      _id: order._id,
      name: order.stock.name,
      symbol: order.stock.symbol,
      qty: order.qty,
      price: order.price,
      mode: order.mode,
      status: order.status,
      createdAt: order.createdAt,
    }));

    res.status(200).json({
      success: true,
      orders: formattedOrders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createOrder = async (req, res) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    const { stockId, qty, mode } = req.body;

    if (!stockId || !qty || !mode) {
      await session.abortTransaction();
      session.endSession();

      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const stock = await Stock.findById(stockId);

    if (!stock) {
      await session.abortTransaction();
      session.endSession();

      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    const order = await Order.create(
      [
        {
          user: req.user._id,
          stock: stock._id,
          qty,
          price: stock.price,
          mode,
        },
      ],
      { session }
    );

    let holding = await Holding.findOne({
      user: req.user._id,
      stock: stock._id,
    }).session(session);

    if (mode === "BUY") {
      if (holding) {
        const totalQty = holding.qty + Number(qty);

        const avgPrice =
          (holding.avg * holding.qty + stock.price * qty) /
          totalQty;

        holding.qty = totalQty;
        holding.avg = Number(avgPrice.toFixed(2));
        holding.price = stock.price;

        await holding.save({ session });
      } else {
        await Holding.create(
          [
            {
              user: req.user._id,
              stock: stock._id,
              qty,
              avg: stock.price,
              price: stock.price,
            },
          ],
          { session }
        );
      }

      await Position.create(
        [
          {
            user: req.user._id,
            stock: stock._id,
            product: "CNC",
            qty,
            avg: stock.price,
            price: stock.price,
            day: `${stock.percent}%`,
            isLoss: stock.isDown,
          },
        ],
        { session }
      );
    }

    if (mode === "SELL") {
      if (!holding || holding.qty < qty) {
        await session.abortTransaction();
        session.endSession();

        return res.status(400).json({
          success: false,
          message: "Insufficient holdings",
        });
      }

      holding.qty -= qty;

      if (holding.qty === 0) {
        await holding.deleteOne({ session });
      } else {
        holding.price = stock.price;
        await holding.save({ session });
      }

      await Position.deleteMany({
        user: req.user._id,
        stock: stock._id,
      }).session(session);
    }

    await session.commitTransaction();

    session.endSession();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order: order[0],
    });

  } catch (error) {
    await session.abortTransaction();

    session.endSession();

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};