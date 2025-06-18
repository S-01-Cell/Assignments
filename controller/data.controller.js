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

//Get method (all)
const displayUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users); // or you can render an HTML page using templating
    } catch (err) {
        res.status(500).send('Failed to retrieve data.');
    }
};

//GET method (by ID)
const singleUser = async (req, res) => {
    try {
        const { id } = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


//PUT method
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id, req.body);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

//DELETE method
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Export the controller
module.exports = {
    createUser, singleUser, displayUser, updateUser, deleteUser,
};
