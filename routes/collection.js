import express from 'express';

import { getAllCategories, getAllMenProducts, getAllTraditionalsProducts, getAllShoesProducts, getAllKidsProducts, getAllWomenProducts, getAllProducts } from '../controllers/collection.js';

const router = express.Router();

// API's to get all product related details
router.get('/categories', getAllCategories);
router.get('/men', getAllMenProducts);
router.get('/women', getAllWomenProducts);
router.get('/kids', getAllKidsProducts);
router.get('/shoes', getAllShoesProducts);
router.get('/traditionals', getAllTraditionalsProducts);
router.get('/shop', getAllProducts);

export default router;