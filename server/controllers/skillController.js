import Skill from '../models/Skill.js';

// @desc    Get skills
// @route   GET /api/skills
export const getSkills = async (req, res) => {
  try {
    let skills = await Skill.findOne();
    if (!skills) {
      skills = new Skill();
      await skills.save();
    }
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update skills
// @route   PUT /api/skills
export const updateSkills = async (req, res) => {
  try {
    let skills = await Skill.findOne();
    if (!skills) {
      skills = new Skill(req.body);
    } else {
      Object.assign(skills, req.body);
    }
    await skills.save();
    res.json(skills);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};