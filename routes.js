const express = require('express');
const path = require('path');
const router = express.Router();
const { createUser, displayUser } = require("./controller/data.controller.js")

// Album route
router.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'album.html'));
});

// Price route
router.get('/album/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'price.html'));
});

//Form route
router.get('/album/price/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contact form.html'));
});

//Data route
router.get('/UserDetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'data.html'));
});

//Saving
router.post('/album/price/form', createUser);

//Displaying
router.get('/UserDetails/api', displayUser);



// app.listen(30000, () => {
//     console.log('Server running at http://localhost:30000');
// });

module.exports = router;