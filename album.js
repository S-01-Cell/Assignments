//for http host request
const express = require('express');

const path = require('path'); //path module that deals with path
const bodyParser = require('body-parser');//parse url encoded form ( parses the data and attaches it to request body); 
const app = express();

app.use(express.static(__dirname,));
app.use(bodyParser.urlencoded({ extended: false })); //use bosyParser middleware to parse the application

app.get('/', (req, res) => { //path and callback func
    res.sendFile(path.join(__dirname, 'album.html')); //send the html file from same folder
});

//body parser
app.post('/', (req, res) => {
    console.log(req.body);
    // database work here
    res.send('successfully posted');
})
app.listen(300);