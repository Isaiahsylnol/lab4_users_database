const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoutes.js");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.dw4sa.gcp.mongodb.net/users?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(userRouter);

app.listen(8081, () => {
  console.log("Server is running...");
});
