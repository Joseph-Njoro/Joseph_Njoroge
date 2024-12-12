import Project from '../models/Project.js'; // Import using ES modules

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
};