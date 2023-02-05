import express from 'express';
import Order from '../models/Order.js';

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
  const {order_id, name, price} = req.body;
  const orderItem = new Order({
    order_id,
    name,
    price,
  });
  orderItem.save()
  res.status(200).json({ message: 'Order create', orderItem});
}