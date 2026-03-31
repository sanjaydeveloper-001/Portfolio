import Project from '../models/Project.js';

// @desc    Get all projects
// @route   GET /user/projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('getProjects error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create new project
// @route   POST /user/projects
export const createProject = async (req, res) => {
  try {
    const body = { ...req.body };
    // Ensure tech is always an array
    if (!Array.isArray(body.tech)) {
      body.tech = body.tech ? [body.tech] : [];
    }
    const project = new Project(body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error('createProject error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update project
// @route   PUT /user/projects/:id
export const updateProject = async (req, res) => {
  try {
    const body = { ...req.body };
    if (!Array.isArray(body.tech)) {
      body.tech = body.tech ? [body.tech] : [];
    }
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      body,
      { new: true, runValidators: true }
    );
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json(project);
  } catch (err) {
    console.error('updateProject error:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete project
// @route   DELETE /user/projects/:id
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('deleteProject error:', err.message);
    res.status(500).json({ message: err.message });
  }
};