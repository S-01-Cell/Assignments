const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/data.model.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//serving file
app.use(express.static(__dirname, "static"));

//Data route
app.get('/FormDetails', (req, res) => {
    res.sendFile(path.join(__dirname, 'data.html'));
});

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

//Saving the Details
app.post('/submit-form', async (req, res) => {
    try {
        const userData = new User(req.body);
        await userData.save();
        res.send('Form submitted and saved!');
    } catch (err) {
        res.status(500).send('Failed to save data.');
    }
});


//connecting the program to mongodb
mongoose
  .connect(
    "mongodb+srv://zahrasyeda173:<db_password>@assignment.ehxs1fq.mongodb.net/?retryWrites=true&w=majority&appName=assignment"
  )
  .then(() => {
    console.log("connected to DB"); //executes when connected
    app.listen(3000, () => {
      console.log("server is on port 3000"); //executes after the above line
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
//gives above o/p once its connected or not
