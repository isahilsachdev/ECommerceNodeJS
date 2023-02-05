import express from 'express';
import Coupon from '../models/Coupon.js';

const router = express.Router();

export const completeCheckout = async (req, res) => {
  try {
    const couponCodes = await Coupon.find();
    const {coupon_code} = req.body;
    let flag = false;

    for (let i=0; i<couponCodes.length; i++) {
      if (couponCodes[i].coupon_code == coupon_code) {
        flag = true;
        res.json({
          description: "Transaction completed successfully."
        });
      }
    }

    // the flag is to determine if we were able to find a coupon or not.
    if (!flag) {
      res.status(404).json({ message: "Invalid Coupon code." });  
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;
