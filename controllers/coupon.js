import express from 'express';
import Coupon from '../models/Coupon.js';
import { v4 } from 'uuid';

const router = express.Router();

export const getCouponCode = async (req, res) => {
  try {
    const code = v4().substring(0,6); // reducing coupon's length
    const coupon_code = new Coupon({
      coupon_code: `code-${code}`,
    });

    // saving the coupon code to generate list of codes used whenever needed
    coupon_code.save();
    res.json({
      coupon_code,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getAllCouponCodes = async (req, res) => {
  try {
    const codes = await Coupon.find();
    res.json({
      codes,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;
