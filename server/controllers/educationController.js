import Education from '../models/Education.js';

// @desc    Get all education
// @route   GET /api/education
export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new education
// @route   POST /api/education
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update education
// @route   PUT /api/education/:id
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!education) return res.status(404).json({ message: 'Not found' });
    res.json(education);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete education
// @route   DELETE /api/education/:id
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};