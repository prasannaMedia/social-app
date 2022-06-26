const express = require("express");
const app = express();
const path = require("path");
const dbConnect = require("./config/db");
const dotenv = require('dotenv');

dotenv.config();

dbConnect();

app.use(express.json({ extended: false }));

app.use(express.static("client/public"));


app.get("/", (req, res) =>{
  res.sendFile(path.join(__dirname,'client', "public", "index.html"))
}
);

// mount routes
app.use("/api/user", require("./server/routes/api/user"));
app.use("/api/posts", require("./server/routes/api/posts"));
app.use("/api/auth", require("./server/routes/api/auth"));
app.use("/api/profile", require("./server/routes/api/profile"));


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  next();
});

const PORT = process.env.PORT || "5000";
app.listen(PORT, () => console.log(`server started on port no ${PORT}`));
