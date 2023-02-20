import express from 'express';
import {data} from '../db.js'
const router = express.Router();

export const getAllCategories = (req, res) => {
  try {
    const categories = data.categories
    res.json({categories});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllMenProducts = (req, res) => {
  try {
    const products = data.men
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllWomenProducts = (req, res) => {
  try {
    const products = data.women
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllKidsProducts = (req, res) => {
  try {
    const products = data.kids
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllShoesProducts = (req, res) => {
  try {
    const products = data.shoes
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}
export const getAllTraditionalsProducts = (req, res) => {
  try {
    const products = data.traditionals
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getAllProducts = (req, res) => {
  try {
    const products = data.shop
    res.json({products});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export default router;