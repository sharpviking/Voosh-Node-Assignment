const { Customer, validate } = require('../models/order');
const mongoose = require('mongoose');
const express = require('express');
const { Order } = require('../models/orders');
const router = express.Router();




router.get('/', async (req, res) => {
    const orders = await Order.find().sort('name');
    res.send(customers);
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);


    let order = new Order({
        user_id: req.body.user_id,
        phone_number: req.body.phone_number,
        sub_total: req.body.sub_total
    });
    order = await order.save();
    res.send(order);
});







router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) res.status(404).send('The order with given id was not found');
    res.send(order);

});



module.exports = router;
