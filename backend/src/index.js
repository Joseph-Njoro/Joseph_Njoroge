// index.js
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';

// Import your custom modules
import connectDB from './db.js'; // MongoDB connection function
import buildAdminRouter from './admin/admin.js'; // AdminJS setup (with .js extension)

// Import routes
import projectRoutes from './routes/projectRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(express.json());

// Helmet to allow inline scripts and styles (important for AdminJS)
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // Allow inline scripts
      styleSrc: ["'self'", "'unsafe-inline'"],  // Allow inline styles
      // Allow additional resources needed by AdminJS
      fontSrc: ["'self'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:"], // Allow images from data URIs
      connectSrc: ["'self'", "ws://localhost:3000"], // Allow WebSocket connections (useful in development)
    },
  })
);

// Route setup
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/blogs', blogRoutes);

// Serve resume as a downloadable file
app.get('/api/resume', (req, res) => {
  const filePath = path.join(__dirname, 'static', 'resume.pdf');
  res.download(filePath);
});

// AdminJS setup
buildAdminRouter(app); // Adding AdminJS routes

// Connect to MongoDB
connectDB(); // Call the function to connect to MongoDB

// Start the server after MongoDB connection is successful
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
  console.log(`AdminJS is available at http://localhost:${process.env.PORT || 5000}/admin`);
});