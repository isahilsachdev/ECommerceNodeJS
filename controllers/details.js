import express from 'express';
import Details from '../models/details.js';
import Order from '../models/order.js';
import Coupon from '../models/coupon.js';

const router = express.Router();

export const getDetails = async (req, res) => {
  try {
    const details = await Details.find();
    res.status(200).json({details});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const updateDetails = async (req, res) => {
  try {
    const previousDetails = await Details.find();
    const orders = await Order.find()
    const coupon_codes = await Coupon.find();
    const {amount, discount} = req.body;
    // deleting previous data and pushing new
    await Details.deleteMany({})
    const codesArr = coupon_codes.map(code => code.coupon_code);

    // creating new Data
    const newDetails = new Details({
      total_amount: previousDetails.length ? previousDetails[0].total_amount + amount : amount,
      total_discount: previousDetails.length ? previousDetails[0].total_discount + discount : discount,
      total_orders: orders.length,
      coupon_codes: codesArr,
    })

    // Saving new data
    newDetails.save();
    res.send("Updated Details Successfully!");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;