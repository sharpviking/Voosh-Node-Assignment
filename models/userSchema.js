const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users  = new Schema({
    username: String,
   email: String,
   password: String,

});

const UserModel = mongoose.model('Authentication',Users);
module.exports = UserModel;