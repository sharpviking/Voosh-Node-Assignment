const order_model = require("../models/orders");


function add_order(req, res) {
    let obj = {
        user_id: req.body.user_id,
        sub_total: req.body.sub_total,
        sub_total: req.body.sub_total
    }
    let resultData = new order_model(obj);
    resultData.save().then(item => {
        res.send("order added successfully")
    }).catch((err) => {
        console.log("error in adding order data");
    })
};

module.exports = add_order;