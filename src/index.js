const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://plutonium-functionUp:Atlas@cluster0.suocjnk.mongodb.net/afrin_db", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use (
    function (req, res, next) {
        // let dmy = moment().format('DD-MM-YYYY, HH:mm:ss');
        // let ipAddress = req.ip;
        // let url = req.originalUrl
        // console.log ("Current Date : "+ dmy);
        // console.log("IP Address : " + ipAddress);
        // console.log("url : " + url);

        console.log("This is global");
        
        next();
    }
);

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
