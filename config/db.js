const mongooose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const db=process.env.mongoURI

const connectdb = async () => {
  try {
    await mongooose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectdb;