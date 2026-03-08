import Interest from '../models/Interest.js';

export const getInterests = async (req, res) => {
  try {
    let interests = await Interest.findOne();
    if (!interests) {
      interests = new Interest({ interests: [] });
      await interests.save();
    }
    res.json(interests);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateInterests = async (req, res) => {
  try {
    let interests = await Interest.findOne();
    if (!interests) {
      interests = new Interest(req.body);
    } else {
      Object.assign(interests, req.body);
    }
    await interests.save();
    res.json(interests);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};