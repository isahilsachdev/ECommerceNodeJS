import express from 'express';
import mongoose from 'mongoose';

import Cart from '../models/addToCart.js';

const router = express.Router();

export const addToCart = (req,res) => {
  const { name, price, image } = req
  // forming a cart item to save in database
  const cartItem = new Cart({
    name,
    quantity: 1,
    price,
    image,
  });
  cartItem.save();
  res.status(200).json({ message: 'Item added to cart', cartItem});
};

export default router;
