import express from 'express'; // Use ES module import
import { getProjects } from '../controllers/projectController.js'; // Use named imports for controllers

const router = express.Router();

router.get('/', getProjects);

export default router; // Use export default instead of module.exports