import express from 'express';

import { getCouponCode } from '../controllers/coupon.js';

const router = express.Router();

// API's for get total orders
router.get('/', getCouponCode);

export default router;