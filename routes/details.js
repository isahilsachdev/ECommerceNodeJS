import express from 'express';

import { getDetails, updateDetails } from '../controllers/details.js';

const router = express.Router();

// API's to get details
router.get('/', getDetails);
router.post('/', updateDetails);

export default router;