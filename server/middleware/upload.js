import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const ext = file.originalname.toLowerCase().split('.').pop();
  const extValid  = allowedTypes.test(ext);
  const mimeValid = allowedTypes.test(file.mimetype);

  if (mimeValid || extValid) {
    return cb(null, true);
  }
  cb(new Error("Only images are allowed (jpeg, jpg, png, gif, webp)"));
};

export const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter,
});