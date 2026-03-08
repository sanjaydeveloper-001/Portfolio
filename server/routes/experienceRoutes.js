import express from 'express';
import {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
} from '../controllers/experienceController.js';

const router = express.Router();

router.route('/')
  .get(getExperiences)
  .post(createExperience);

router.route('/:id')
  .put(updateExperience)
  .delete(deleteExperience);

export default router;