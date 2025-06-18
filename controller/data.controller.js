const User = require("../models/data.model.js");
// POST method
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: 'Form data saved successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error: error.message });
    }
};

//Get method
const displayUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // or you can render an HTML page using templating
    } catch (err) {
        res.status(500).send('Failed to retrieve data.');
    }
};
// Export the controller
module.exports = {
    createUser, displayUser,
};
