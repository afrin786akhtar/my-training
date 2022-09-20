const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const multer = require('multer')
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(multer().any())
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://projects94:E35tUpfux9D87GOj@cluster0.m1ousdd.mongodb.net/group30atabase", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});