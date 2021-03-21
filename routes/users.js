var express = require("express");
var router = express.Router();
var axios = require("axios");

const APIKey = "RGAPI-4cd14921-8b87-49ba-8674-83407a23ec33";
/* GET users information. */
router.get("/", function (req, res, next) {
	const userID = req.query.userID;
	axios.get(encodeURI(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${userID}?api_key=${APIKey}`))
		.then((response) => axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${response.data.id}?api_key=${APIKey}`))
		.then((response) => res.send(response.data))
    .catch((e)=>{
      console.log('API 호출 실패 : '+e)
      res.send([])
    })
});

module.exports = router;
