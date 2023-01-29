const Joi = require('joi');
const mongoose = require('mongoose');
const Order = mongoose.model('Order', new mongoose.Schema({
    user_id: String,
    sub_total: String,
    phone_number: Number
}));


function validateOrder(order) {
    const schema = Joi.object({
        name: Joi.string().required(),
        phone_number: Joi.number().required(),
        sub_total: Joi.string().required()
    });
    return schema.validate(order);
}


exports.Order = Order;
exports.validate = validateOrder;
