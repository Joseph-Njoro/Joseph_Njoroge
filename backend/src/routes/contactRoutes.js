import express from 'express'; // Use ES module import
import { submitContactForm } from '../controllers/contactController.js'; // Use named imports for controllers

const router = express.Router();

router.post('/', submitContactForm);

export default router; // Use export default instead of module.exports