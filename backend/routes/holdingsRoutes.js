const router = require("express").Router();
const { getAllHoldings } = require("../controllers/holdingsController");

router.get("/allHoldings", getAllHoldings);

module.exports = router;
