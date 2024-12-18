import express from 'express';
import { getBlogs, getBlogById } from '../controllers/blogController.js'; // Import the new function

const router = express.Router();

// Route to get all blogs
router.get('/', getBlogs);

// Route to get a blog by ID
router.get('/:id', getBlogById); // Add this line

export default router;