import Skill from '../models/Skill.js';

// @desc    Get skills
// @route   GET /user/skills
export const getSkills = async (req, res) => {
  try {
    let skills = await Skill.findOne();
    if (!skills) {
      skills = new Skill({ languages: [], frameworks_tools: [], softSkills: [] });
      await skills.save();
    }
    // Ensure all arrays are always arrays in the response
    const data = skills.toObject();
    data.languages        = Array.isArray(data.languages)        ? data.languages        : [];
    data.frameworks_tools = Array.isArray(data.frameworks_tools) ? data.frameworks_tools : [];
    data.softSkills       = Array.isArray(data.softSkills)       ? data.softSkills       : [];
    res.json(data);
  } catch (err) {
    console.error('getSkills error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Update skills
// @route   PUT /user/skills
export const updateSkills = async (req, res) => {
  try {
    let skills = await Skill.findOne();
    if (!skills) {
      skills = new Skill(req.body);
    } else {
      Object.assign(skills, req.body);
    }
    // Ensure arrays before saving
    if (!Array.isArray(skills.languages))        skills.languages        = [];
    if (!Array.isArray(skills.frameworks_tools)) skills.frameworks_tools = [];
    if (!Array.isArray(skills.softSkills))       skills.softSkills       = [];
    await skills.save();
    res.json(skills);
  } catch (err) {
    console.error('updateSkills error:', err.message);
    res.status(400).json({ message: err.message });
  }
};