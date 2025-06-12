const express = require('express');
const path = require('path');
const app = express();

// Serve everything in the directory
app.use(express.static(__dirname));

// Album route
app.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'album.html'));
});

// Price route
app.get('/album/price', (req, res) => {
    res.sendFile(path.join(__dirname, 'price.html'));
});

//Form route
app.get('/album/price/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact form.html'));
});

app.listen(30000, () => {
    console.log('Server running at http://localhost:30000');
});
