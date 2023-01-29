const Joi = require('joi');
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())

mongoose.connect("mongodb+srv://sharpviking:l9a53607@cluster0.0maezhz.mongodb.net/test")
    .then(() => console.log('connected to mongoDB...'))
    .catch(err => console.error('could not connect to MongoDB...'));


const SignupRouter = require("./routes/user_routes");
const { Order } = require('./models/orders');

app.use("/auth", SignupRouter);
app.use('/api/orders', Order);
// require('/routes/prod')(app);


const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`));