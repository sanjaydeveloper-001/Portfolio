import express from 'express';
import { upload } from '../middleware/upload.js';
import { uploadImage } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/', (req, res) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      // Multer error (e.g., file too large, wrong type)
      return res.status(400).json({ message: err.message });
    }
    // No error, proceed to controller
    uploadImage(req, res);
  });
});

export default router;