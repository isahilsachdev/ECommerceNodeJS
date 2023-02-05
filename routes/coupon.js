import express from 'express';

import { getCouponCode, getAllCouponCodes } from '../controllers/coupon.js';

const router = express.Router();

// API's for get total orders
router.get('/', getCouponCode);
router.get('/all', getAllCouponCodes);

export default router;