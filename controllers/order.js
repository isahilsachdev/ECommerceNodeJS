import express from 'express';
import Order from '../models/order.js';
import { v4 } from 'uuid';

const router = express.Router();

export const getTotalOrders = async (req, res) => {
  try {
    const orderItems = await Order.find();
    res.json({
      count: orderItems.length,
      orders: orderItems
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const AddOrder = (req, res) => {
  const {order_id} = req.body;
  const orderItem = new Order({
    order_id : order_id || v4(), // passing random id if order_id isn't passed (not ideal)
  });
  orderItem.save()
  res.status(200).json({ message: 'Order create', orderItem});
}


export const removeCoupons = async (req, res) => {
  await Order.deleteMany({});
}

export default router;