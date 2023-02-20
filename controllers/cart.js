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
  const { price, name, category, img, item_id } = req.body;
  // forming a cart item to save in database
  const cartItem = new Cart({
    price,
    name,
    category,
    img: img[0],
    item_id,
    quantity: 1,
  });
  cartItem.save();
  res.status(200).json({ message: 'Item added to cart', cartItem});
};

export const deleteCartItem = async (req,res) => {
  const { item_id } = req.params;
  // delete individual item from cart
  Cart.findOneAndRemove({ item_id }, (err, doc) => {
    if (err) return res.status(500).send(err);
    return res.json({ message: 'Post deleted successfully.', doc });
  });
};

export const deleteAllCartItem = async (req,res) => {
  // delete all items from cart
  Cart.deleteMany({}, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('All items have been deleted');
    }
  });
};

export const deleteAllCartItemForId = async (req,res) => {
  const { item_id } = req.params;
  // delete all items from cart for specific id
  Cart.deleteMany({ item_id }, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.send('All items have been deleted');
    }
  });
};

export default router;
