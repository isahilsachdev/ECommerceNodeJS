const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://isahilsachdev2002:sahilsachdev1029@cluster0.rnkg0g6.mongodb.net/?retryWrites=true&w=majority"
).then(() => console.log("database connection successful")).catch((err) => console.log("database connection failed", err))

app.listen("5001", () => {
  console.log("listening on port 5001")
})