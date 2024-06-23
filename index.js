const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API what up");
});

mongoose
  .connect(
    "mongodb+srv://habithapa:5nreshF9u7YGF3r8@backenddb.8a5smxo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => console.log("Listening on port 3000"));
  })
  .catch((err) => console.log(err));
