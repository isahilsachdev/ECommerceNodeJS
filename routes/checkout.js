import express from 'express';

import { completeCheckout } from '../controllers/checkout.js';

const router = express.Router();

// API's for get total orders
router.post('/', completeCheckout);

export default router;