import Profile from '../models/Profile.js';

// @desc    Get profile
// @route   GET /api/profile
// controllers/profileController.js
export const getProfile = async (req, res) => {
  try {
    // Get the profile with the latest updatedAt, or create a new one if none exists
    let profile = await Profile.findOne().sort({ updatedAt: -1 });
    if (!profile) {
      profile = new Profile();
      await profile.save();
    }
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update profile
// @route   PUT /api/profile
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    await profile.save();
    res.json(profile);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};