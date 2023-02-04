import mongoose from 'mongoose';

//Shopping Cart Schema
const ShoppingCartSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number,
    image: String,
    // account_id: String, // to setup some authentication to identify user
});

const Cart = mongoose.model("Cart", ShoppingCartSchema);

export default Cart;