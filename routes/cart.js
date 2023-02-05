import express from 'express';

import { addToCart, getCartItems, deleteCartItem, deleteAllCartItem } from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/:item_id', addToCart);
router.delete('/:item_id', deleteCartItem);
router.delete('/', deleteAllCartItem);
export default router;