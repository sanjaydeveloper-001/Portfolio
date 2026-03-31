import Interest from '../models/Interest.js';

// @desc    Get interests
// @route   GET /user/interests
export const getInterests = async (req, res) => {
  try {
    let interests = await Interest.findOne();
    if (!interests) {
      interests = new Interest({ interests: [] });
      await interests.save();
    }
    // Ensure interests is always an array
    const data = interests.toObject();
    data.interests = Array.isArray(data.interests) ? data.interests : [];
    res.json(data);
  } catch (err) {
    console.error('getInterests error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update interests
// @route   PUT /user/interests
export const updateInterests = async (req, res) => {
  try {
    let interests = await Interest.findOne();
    if (!interests) {
      interests = new Interest(req.body);
    } else {
      Object.assign(interests, req.body);
    }
    // Ensure array before saving
    if (!Array.isArray(interests.interests)) interests.interests = [];
    await interests.save();
    res.json(interests);
  } catch (err) {
    console.error('updateInterests error:', err.message);
    res.status(400).json({ message: err.message });
  }
};