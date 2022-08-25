const moment = require('moment')

// const mid1= function ( req, res, next) {
//     let currentDate = moment().format('DD-MM-YYYY, HH:mm:ss');
//         let ipAddress = req.ip;
//         let url = req.originalUrl
//         console.log ("Current Date : "+ currentDate);
//         console.log("IP Address : " + ipAddress);
//         console.log("url : " + url);
        
//         next();
// }

const date = function ( req, res, next) {
    
    let currentDate = moment().format('DD-MM-YYYY' , 'HH:mm:ss');
    console.log("Current Date : " + currentDate);
    next()
}

const ip = function ( req, res, next) {
    
    let ipAddress = req.ip ;
    console.log("IP-Address : " + ipAddress)
    next()
}

const url = function ( req, res, next) {
    let url = req.originalUrl
    console.log("URL : " + url)
    next()
}



// module.exports.mid1= mid1
module.exports.date= date
module.exports.ip = ip
module.exports.url= url

