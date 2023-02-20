import express from 'express';

import { addToCart, getCartItems, deleteCartItem, deleteAllCartItem, deleteAllCartItemForId } from '../controllers/cart.js';

const router = express.Router();

// API's for cart
router.get('/', getCartItems);
router.post('/', addToCart);
router.delete('/:item_id', deleteCartItem);
router.delete('/', deleteAllCartItem);
router.delete('/all/:item_id', deleteAllCartItemForId);
export default router;