import express from 'express';
import Cart from '../models/addToCart.js';

const router = express.Router();

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json({
      data: cartItems,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const addToCart = (req,res) => {
  const cart = req.body;
  const { item_id } = req.params
  // forming a cart item to save in database
  const cartItem = new Cart({
    ...cart,
    item_id,
    quantity: 1,
  });
  cartItem.save();
  res.status(200).json({ message: 'Item added to cart', cartItem});
};

export const deleteCartItem = async (req,res) => {
  const { item_id } = req.params;
  Cart.findOneAndRemove({ item_id }, (err, doc) => {
    if (err) return res.status(500).send(err);
    return res.json({ message: 'Post deleted successfully.', doc });
  });

  res.json({ message: 'Post deleted successfully.' });
};

export const deleteAllCartItem = async (req,res) => {
  Cart.remove({}, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('All items have been deleted');
    }
  });
};

export default router;
