import express from 'express'; // Use ES module import
import { getBlogs } from '../controllers/blogController.js'; // Use named imports for controllers

const router = express.Router();

router.get('/', getBlogs);

export default router; // Use export default instead of module.exports