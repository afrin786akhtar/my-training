let axios = require("axios")

let meme = async function (req, res) {

    try {

        let text =req.body
        let template_id=req.query.template_id
        let text0=req.query.text0
        let text1=req.query.text1

        let options={
            method:"post",
            url: `https://api.imgflip.com/caption_image?username=chewie12345&password=meme@123&template_id=${template_id}&text0=${text0}&text1=${text1}`,
            data:text
        }
        let final= await axios(options)
        let result =final.data
        res.status(200).send({msg :result})
        

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.meme = meme