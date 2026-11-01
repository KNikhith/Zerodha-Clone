const { connect } = require("mongoose");
require("dotenv").config({ path: "../.env" });

const mongodbAtlasUrl = process.env.MONGODB_ATLAS_URL;
// const mongodbLocalUrl = "mongodb://127.0.0.1:27017/zerodha";

async function connectDb() {
    await connect(mongodbAtlasUrl);
}
connectDb().then(() => console.log("Database connected!"))
    .catch((err) => console.log("Db connection failed :-", err.message));

module.exports = connectDb;