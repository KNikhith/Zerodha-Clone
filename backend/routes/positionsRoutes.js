const router = require("express").Router();
const { getAllPositions } = require("../controllers/positionsController");

router.get("/allPositions", getAllPositions);

module.exports = router;
