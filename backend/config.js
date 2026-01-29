const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://shubhsingh6392_db_user:Shubh0987@cluster0.ayuejjv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

