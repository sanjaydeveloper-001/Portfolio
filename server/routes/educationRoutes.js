import express from 'express';
import {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController.js';

const router = express.Router();

router.route('/')
  .get(getEducations)
  .post(createEducation);

router.route('/:id')
  .put(updateEducation)
  .delete(deleteEducation);

export default router;