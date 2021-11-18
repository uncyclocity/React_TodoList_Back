const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", (req, res) => {
  const { code } = req.body;
  const redirectUri = "http://localhost:3000/";

  const getAuthCode = async (code) => {
    await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      params: {
        grant_type: "authorization_code",
        client_id: process.env.CLIENT_ID,
        redirect_uri: redirectUri,
        code,
      },
    }).then((res) => {
      console.log(res);
      // const ACCESS_TOKEN = res.data.access_token;
      // const { Kakao } = window;
      // Kakao.API.request({
      //   url: "v2/user/me",
      //   success: ({ kakao_account }) => {
      //     console.log(kakao_account);
      //   },
      // });
    });
  };

  getAuthCode(code);
});

module.exports = router;