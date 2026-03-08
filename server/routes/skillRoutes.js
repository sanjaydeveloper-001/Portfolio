import express from 'express';
import { getSkills, updateSkills } from '../controllers/skillController.js';

const router = express.Router();

router.route('/')
  .get(getSkills)
  .put(updateSkills);

export default router;