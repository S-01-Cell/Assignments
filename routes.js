const express = require('express');
const path = require('path');
const router = express.Router();
const { createUser, displayUser, singleUser, updateUser, deleteUser } = require("./controller/data.controller.js")

// Album route
router.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'album.html'));
});

// Price route
router.get('/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'price.html'));
});

//Form route
router.get('/billing', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contact form.html'));
});

//Data route
router.get('/UserDetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'data.html'));
});

//Saving from ThunderBird
// router.post('/album/price/form', createUser);

//Saving
router.post('/submit-form', createUser);


//Displaying all
router.get('/UserDetails/api', displayUser);

//Display by ID
router.get('/UserDetails/api/:id', singleUser);

//Updating
router.put('/UserDetails/api/:id', updateUser);

//Deleting
router.delete('/UserDetails/api/:id', deleteUser);



// app.listen(30000, () => {
//     console.log('Server running at http://localhost:30000');
// });

module.exports = router;