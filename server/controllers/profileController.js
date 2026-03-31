import Profile from '../models/Profile.js';

// @desc    Get profile
// @route   GET /user/profile
export const getProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne().sort({ updatedAt: -1 });
    if (!profile) {
      profile = new Profile({
        name: '', age: '', domain: '', summary: '',
        location: '', phone: '', email: '', cvLink: '',
        profilePhoto: '', contact: [], social: [],
      });
      await profile.save();
    }
    // Ensure contact and social are always arrays
    const data = profile.toObject();
    data.contact = Array.isArray(data.contact) ? data.contact : [];
    data.social  = Array.isArray(data.social)  ? data.social  : [];
    res.json(data);
  } catch (err) {
    console.error('getProfile error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update profile
// @route   PUT /user/profile
export const updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();
    if (!profile) {
      profile = new Profile(req.body);
    } else {
      Object.assign(profile, req.body);
    }
    // Ensure arrays are always arrays before saving
    if (!Array.isArray(profile.contact)) profile.contact = [];
    if (!Array.isArray(profile.social))  profile.social  = [];
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error('updateProfile error:', err.message);
    res.status(400).json({ message: err.message });
  }
};