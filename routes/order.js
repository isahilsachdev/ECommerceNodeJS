import express from 'express';

import { AddOrder, getTotalOrders } from '../controllers/order.js';

const router = express.Router();

// API's for get total orders
router.get('/', getTotalOrders);
router.post('/', AddOrder);

export default router;