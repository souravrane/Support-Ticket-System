const express = require("express");
const dotenv = require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(201).json({ message: "Welcome to support desk api" });
});

// Routes
app.use("/api/users", userRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT} `);
});
