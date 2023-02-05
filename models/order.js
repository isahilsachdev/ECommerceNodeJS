import mongoose from 'mongoose';

//Shopping order Schema
const OrderSchema = new mongoose.Schema({
    order_id: String,
    name: String,
    price: Number,
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;