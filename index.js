const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
app.use(express.static(__dirname + '/public/'))

mongoose.connect('mongodb://localhost:27017//portfolio',
{ useNewUrlParser: true },
    () => console.log('DB connected')
);

const emailSchema = new mongoose.Schema({
    email: String,
    password: String,

});

const Contact = mongoose.model("Contact", emailSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
const myData = new Contact(req.body);
console.log(myData);
});



app.listen(port,
    () => console.log(`Running on ${port}`)
);