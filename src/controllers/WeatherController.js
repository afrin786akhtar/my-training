let axios = require("axios")

let weather = async function (req, res) {

    try {

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=5cfcb57b7170dc6748e5637dfabd576e`
        }

        let final = await axios(options)
        console.log(final)
        result = final.data
        res.status(200).send({ msg: result })
    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.weather = weather
