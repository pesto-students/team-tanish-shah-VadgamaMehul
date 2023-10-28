const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require('cors');

const app = express();
const port = 3000;

//connection mongodb
mongoose.connect("mongodb://127.0.0.1:27017/todo_express", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});


// middlewaers
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for parsing application/json


// routes
app.use(require("./Routes/index"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
