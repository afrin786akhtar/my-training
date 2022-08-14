const express = require('express');
const abc = require('../introduction/intro')
const underscore = require('underscore')
const first = require('lodash');

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     // console.log('My batch is', abc.name)
//     // abc.printName()
//     // let result = underscore.first(["Sturday", "sunday" , "monday"] , 2);
//     // console.log("Underscore Example : " , result );

//     let month = ['january', 'february', 'march', 'april', 'may', 'jun', 'july', 'aug', 'september', 'october', 'november', 'december'];
//     let result1 = first.chunk(month , 4);
//     console.log(result1);

//     let oddArray = [ 1, 3, 5, 7, 9, 11 ,13, 15 , 17, 19] ;
//     let result2 = first.tail(oddArray);
//     console.log("odd array : " , result2)

//     let arr1 = [1, 2, 2]
//     let arr2 = [3, 3, 4, 5]
//     let arr3 = [5, 5, 6]
//     let arr4 = [6, 6, 8]
//     let arr5 = [7, 7, 8, 9];
//     let result3 = first.union(arr1 , arr2, arr3 , arr4, arr5);
//     console.log("Union of 5 array : " , result3);


//     let pairArray = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutte Island"], ["fantasy", "Pans Labyrinth"]]
//     let result4 = first.fromPairs(pairArray);
//     console.log("forming the pairs : ", result4);
    
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// router.get('/movies', function(req , res){
//     let movies = ['DDLJ','MS.DHONI','KGF2', 'RRR']
//     res.send(movies)
 
// })
// router.get('/movies/:indexNumber' , function(req , res){
//     let movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     let requestParams = req.params
//     let num= JSON.stringify(requestParams)
//     let value=Object.values(requestParams)
    
    
//     res.send(movies[value])

// })

 
// // router.get('/movies/:i', function (req, res){
// //     let movies=['DDLJ','MS.DHONI','KGH2', 'RRR']
    
// //     let requestParams = req.params  //
// //     let num= JSON.stringify(requestParams)
// //     let value=Object.values(requestParams)
    
    
// //     res.send(movies[value])
     
// // })

// router.get('/student-details/:name', function(req, res){
//     /*
//     params is an attribute inside request that contains 
//     dynamic values.
//     This value comes from the request url in the form of an 
//     object where key is the variable defined in code 
//     and value is what is sent in the request
//     */

//     let requestParams = req.params

//     // JSON strigify function helps to print an entire object
//     // We can use any ways to print an object in Javascript, JSON stringify is one of them
//     console.log("This is the request "+ JSON.stringify(requestParams))
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
    
//     res.send('Dummy response')
// })

router.get('/test-me' , function(req , res){
    res.send("Hiii....");
})

router.post('/test-me' , function(req , res){
    res.send([21 , 22 , 23 ]);
})

router.post('/test-post' , function(req , res ){
    res.send({msg : "Hii" , status : "true"})
})

router.post('/test-post-1' , function(req , res ){

    // access the data under the body
    // let id = req.body.username;
    // let pwd = req.body.password;
    // console.log(id , pwd)
    console.log(req.body)
    res.send({msg : "Hii" , status : "true"})
})


// take i/p in post request and add it to an array and return new array
router.post('/test-post-2' , function(req , res){
    let arr= [12, "functioUp"]
    //taking input in post
    let ele = req.body.element
    arr.push(ele)
    
    res.send({msg : arr , status : true})
})

module.exports = router;