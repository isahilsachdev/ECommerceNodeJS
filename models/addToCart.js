import mongoose from 'mongoose';

//Shopping Cart Schema
const ShoppingCartSchema = new mongoose.Schema({
    item_id: String,
    name: String,
    quantity: Number,
    price: Number,
    img: String,
    category: String,
});

const Cart = mongoose.model("Cart", ShoppingCartSchema);

export default Cart;