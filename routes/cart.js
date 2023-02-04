import express from 'express';

import { addToCart } from '../controllers/cart.js';

const router = express.Router();

router.post('/:item_id', addToCart);
export default router;