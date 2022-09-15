const express = require('express')
const router = express.Router()
const collegeController= require('../Controllers/collegeController')
const InternController= require('../Controllers/InternController')

//-----------------dummy---------------------

router.get("/test-me",function(req,res){
    res.send("maari api testing")
})

//--------------createCollege----------------

router.post("/functionup/colleges", collegeController.createCollege)

//--------------create-interns---------------

router.post('/functionup/interns', InternController.createIntern)

//----------------get-details------------------

router.get("/functionup/collegeDetails", collegeController.getcollegeDetails)

module.exports = router