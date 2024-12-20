#### Project Overview

### Table of Contents

Introduction

Features

Technologies Used

Project Structure

APIs and Endpoints

Frontend Overview

Backend Overview

Roadmap

Contributing

License

### Introduction

This project is a professional-grade, full-stack web application showcasing a portfolio and blogging platform. It integrates a modern frontend with a powerful backend API to deliver an elegant and dynamic user experience. The platform allows users to explore projects, read blogs, and download resumes while the admin can efficiently manage content via an admin interface.

### Features

# General

Fully responsive design optimized for desktop and mobile.

Clean, user-friendly UI/UX.

# Frontend

Dynamic blog search and category filtering.

Pagination for blog articles.

Interactive project showcase.

Blog detail pages rendered with markdown support.

# Backend

Secure RESTful API to handle projects, blogs, and contact form submissions.

AdminJS integration for CRUD operations on all resources.

File handling for resume downloads.

Email notifications for contact submissions.

# Security

Environment variable configuration for sensitive data.

Helmet and CORS for secure backend communication.

Error handling and validation mechanisms.

### Technologies Used

# Frontend

React.js with React Router.

React Markdown and Remark plugins for markdown rendering.

CSS for custom styling.

# Backend

Node.js with Express.js for API development.

MongoDB Atlas as the database solution.

AdminJS for administrative CRUD operations.

Nodemailer for email notifications.

# Others

Render/Railway for backend hosting.

MongoDB Atlas for database hosting.

Git for version control.

### Project Structure

# Root Directory

/ProjectRoot
|-- /backend
|-- /frontend
|-- README.md
|-- package.json
|-- .gitignore

# Backend

/backend
|-- /src
|   |-- /controllers
|   |-- /models
|   |-- /routes
|   |-- db.js
|   |-- index.js
|-- .env
|-- package.json

# Frontend

/frontend
|-- /src
|   |-- /components
|   |-- /pages
|   |-- /styles
|-- /public
|-- package.json
|-- README.md

### APIs and Endpoints

# Blog Endpoints

GET /api/blogs – Retrieve all blogs.

GET /api/blogs/:id – Retrieve a specific blog by ID.

POST /api/blogs – Add a new blog (Admin only).

PUT /api/blogs/:id – Update a blog (Admin only).

DELETE /api/blogs/:id – Delete a blog (Admin only).

# Project Endpoints

GET /api/projects – Retrieve all projects.

POST /api/projects – Add a new project (Admin only).

PUT /api/projects/:id – Update a project (Admin only).

DELETE /api/projects/:id – Delete a project (Admin only).

# Contact Endpoints

POST /api/contact – Submit a contact form.

# Additional

GET /api/resume – Download the resume.

### Frontend Overview

The frontend is built with React.js and styled using custom CSS. Key components include:

BlogPage – Displays blog articles with search and filter functionality.

BlogDetailPage – Renders markdown content for individual blogs.

ProjectPage – Showcases portfolio projects.

ContactForm – Allows users to send messages to the admin.

# User Experience

The user interface is clean, responsive, and interactive, ensuring a seamless experience across devices.

### Backend Overview

The backend is developed with Node.js and Express.js. Key features include:

Admin Interface: AdminJS is configured for CRUD operations on all resources.

Database: MongoDB Atlas stores all data with Mongoose as the ORM.

Security: Helmet and CORS ensure secure API communication.

Error Handling: Middleware captures and returns clear error messages.

## Roadmap

# Phase 1: Backend Development

Set up APIs and database integration.

Configure AdminJS for resource management.

# Phase 2: Frontend Development

Create responsive pages for blogs, projects, and contact forms.

Integrate API with the frontend.

# Phase 3: Deployment and Testing

Deploy the backend and database on Render/Railway and MongoDB Atlas.

Host the frontend on a service like Vercel or Netlify.

Perform extensive testing and optimization.

# Future Enhancements:

Add authentication for admin actions.

Implement comment functionality for blogs.

Enhance the UI with animations and transitions.

## Contributing

Contributions are welcome! If you have ideas for improvements or find bugs, please reach out. Contact me at ramosnjoro@gmail.com for collaboration opportunities.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Copyright © 2024 Joseph Njoroge