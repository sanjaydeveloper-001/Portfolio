import Education from '../models/Education.js';

// @desc    Get all education
// @route   GET /user/education
export const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({ createdAt: -1 });
    res.json(educations);
  } catch (err) {
    console.error('getEducations error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new education
// @route   POST /user/education
export const createEducation = async (req, res) => {
  try {
    const education = new Education(req.body);
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    console.error('createEducation error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update education
// @route   PUT /user/education/:id
export const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!education) return res.status(404).json({ message: 'Not found' });
    res.json(education);
  } catch (err) {
    console.error('updateEducation error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete education
// @route   DELETE /user/education/:id
export const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('deleteEducation error:', err.message);
    res.status(500).json({ message: err.message });
  }
};