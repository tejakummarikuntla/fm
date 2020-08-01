const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/keys");
const requireLogin = require("../middleware/requireLogin");
const nodemailer = require("nodemailer");
const { request } = require("request");
const { response } = require("express");
const f = require("node-fetch");
var axios = require("axios");

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please fill the required fields" });
  }
  User.findOne({ email: email }).then((saveUser) => {
    if (!saveUser) {
      return res.json({ error: "email and passowrd are mis-match" });
    }
    //comparing the password from front-end and the password which stored in our database
    bcrypt
      .compare(password, saveUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: saveUser }, JWT_SECRET);
          const { _id, name, email } = saveUser;
          res.json({
            token,
            user: { _id, name, email },
          });
        } else {
          return res.json({ error: "Invalid email or password" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.json("please fill all the fields");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "muvvalachaitanya05@gmail.com",
      pass: "", //password
    },
  });

  var mail = {
    to: "muvvalachaitanya05@gmail.com",
    subject: "Mail from contact",
    html: `<h3> ${name}  <br/> ${email}  </h3> says:  ${message}`,
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      return res.json({ error: "try again" });
    } else {
      res.send({
        success: true,
        message: "Sent!",
      });
    }
  });
});

router.post("/subscribe", (req, res) => {
  const { name, email } = req.body;

  // Make sure fields are filled
  if (!email || !name) {
    return res.json("filed are missing");
  }

  var data = JSON.stringify({
    email_address: "muvvalachai05@gmail.com",
    status: "subscribed",
    merge_fields: { FNAME: "krishna" },
  });

  var config = {
    method: "post",
    url: "https://us17.api.mailchimp.com/3.0/lists/0e3d9da2d4/members",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic Y2hhaXRhbnlhOmVkNDgzNDg0N2VhOWQ1ODAwZTZiNDRjZGMwZmM4ZGVlLXVzMTc=",
      Cookie:
        "ak_bmsc=5D37C6A92B22D3C064FCF1AF7A0699E117417C4DC7260000C602245F026F5750~plsjXG7mOYui4IjzXrhvZMre4YM299ZZ2+M4ELqiG0IjTivOk2r2OC1VGCQuHrqukzPyjPcHJqw7Vf2SBKV6LXRKRQ0nydnGmqtg4nkdO5nGoRj9VJgjO8pErhoqTu57PGNvURdGhENGfapSVFEUy2ZfwERe552Qoui2awp2ZEdxgdJbeDOPNqmmAiN7v0lXLmFamo2cepahrx6yZRqKHIgqBhFoDQap563baeaYC1aFM=; bm_sv=F8242107B04C5F0E35001837A2B6805D~fGgUXzc5sVJgvhQ0Y92SCu9DTtTNzf7TUa2X/zz3OmPUMZOAw+MaUYB1IrXt4qgpJmR+0E9coLUzp/wcSRw2BgzDXjfGEtEvoKL5IXDCoor4ptcXbHEqtr0M4BE90xgUNEzua3mmxNCyN9lgP/7Tg2ECZg9oasI5ZUlNRyxrANo=",
    },
    data: data,
  };
  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  axios(config, function (error, response, body) {
    try {
      var resObj = {};
      if (response.statusCode === 200) {
        resObj = {
          success: `Subscribed using ${email}!`,
          message: JSON.stringify(response.body),
        };
      } else {
        resObj = {
          error: `Error trying to subscribe ${email}. Please try again.`,
          message: JSON.stringify(response.body),
        };
      }
      res.send(resObj);
    } catch (err) {
      var resErrorObj = {
        error: "There was an error with your request",
        message: err.message,
      };
      res.send(resErrorObj);
    }
  });
});
module.exports = router;

// auth ed4834847ea9d5800e6b44cdc0fc8dee-us17
// 0e3d9da2d4
// https://us7.api.mailchimp.com/3.0/lists/0e3d9da2d4
