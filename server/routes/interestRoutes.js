import express from 'express';
import { getInterests, updateInterests } from '../controllers/interestController.js';

const router = express.Router();

router.route('/')
  .get(getInterests)
  .put(updateInterests);

export default router;