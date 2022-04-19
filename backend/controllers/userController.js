const asyncHandler = require("express-async-handler");

// @desc Register a new user
// @route /api/users
// @accss Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the fields");
    }

    res.send("Register Router");
});

// @desc Login a user
// @route /api/users/login
// @accss Public
const loginUser = asyncHandler(async (req, res) => {
    res.send("Login Router");
});

module.exports = {
    registerUser,
    loginUser,
};
