const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
    res.status(201).json({ message: "Welcome to support desk api" });
});

app.listen(PORT, () => {
    console.log(`server started on port ${PORT} `);
});
