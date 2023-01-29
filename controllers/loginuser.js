const { compare } = require("bcrypt");
const UserModel = require("../models/userSchema")
const jwt = require("jsonwebtoken")



function loginUser(req, res) {
  const pwd = req.body.password;
  const phn_number = req.body.phn_number

  UserModel.findOne({ phn_number: uname }, async function (err, myuser) {
    if (!err) {
      let result = await compare(pwd, myuser.password);
      if (result) {
        res.send("Login done");
      } else {
        res.send("login not done")
      }
    } else {
      res.send("login not done due to email not found");
    }
  })
};


module.exports = loginUser;