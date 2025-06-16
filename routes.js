const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

// Album route
app.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'album.html'));
});

// Price route
app.get('/album/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'price.html'));
});

//Form route
app.get('/album/price/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'contact form.html'));
});


app.listen(30000, () => {
    console.log('Server running at http://localhost:30000');
});

module.exports = router;