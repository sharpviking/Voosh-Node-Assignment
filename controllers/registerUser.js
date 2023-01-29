const UserModel = require("../models/userSchema")
const encrpty = require("../utils/encrpty")
async function RegisterUser(req, res) {
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    let hash = await encrpty(password);
    let userdata = {
        username: username,
        phone_number: phone_number,
        password: hash
    }

    let resultData = new UserModel(userdata);
    resultData.save().then(item => {
        res.send("user added successfully")
    }).catch((err) => {
        console.log("error in adding data");
    })
}

module.exports = RegisterUser;