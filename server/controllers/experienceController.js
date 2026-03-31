import Experience from '../models/Experience.js';

// @desc    Get all experiences
// @route   GET /user/experience
export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.json(experiences);
  } catch (err) {
    console.error('getExperiences error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new experience
// @route   POST /user/experience
export const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    console.error('createExperience error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update experience
// @route   PUT /user/experience/:id
export const updateExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!experience) return res.status(404).json({ message: 'Not found' });
    res.json(experience);
  } catch (err) {
    console.error('updateExperience error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete experience
// @route   DELETE /user/experience/:id
export const deleteExperience = async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('deleteExperience error:', err.message);
    res.status(500).json({ message: err.message });
  }
};