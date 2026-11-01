const router = require("express").Router();
const {
  placeBuyOrder,
  placeSellOrder,
} = require("../controllers/ordersControllers");
const {
  validateBuyOrder,
  validateSellOrder,
} = require("../middlewares/validateOrder");

router.post("/buy", validateBuyOrder, placeBuyOrder);
router.post("/sell", validateSellOrder, placeSellOrder);

module.exports = router;
