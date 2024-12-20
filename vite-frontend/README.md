#### Frontend Documentation for the Portfolio Project

## Table of Contents

Project Overview

Features

Technologies Used

Directory Structure

Development Workflow

API Integration

UI/UX Design

Future Enhancements

Contact Information

### Project Overview

This frontend is part of a portfolio project that showcases blogs, projects, and a professional resume. Built with React.js, the application offers an interactive and responsive design for users to explore articles, view project details, and access a downloadable resume. It integrates seamlessly with a backend API for dynamic content.

### Features

# Blog Management:

Search blogs by keywords.

Filter blogs by categories (e.g., Tech, Personal, Tutorial).

Paginated display for better navigation.

Blog Detail View:

Full content rendering using Markdown support.

Rich text formatting with embedded links and lists.

# Project Showcasing:

Comprehensive details for each project.

Links to live demos and repositories.

## Resume Download:

Direct access to a downloadable PDF of the resume.

# Responsive Design:

Fully optimized for mobile, tablet, and desktop users.

### Technologies Used

Framework: React.js

Styling: CSS with a modular structure for maintainability

Markdown Rendering: React Markdown with GFM plugin for GitHub-style formatting

State Management: React Hooks (useState, useEffect)

Routing: React Router DOM for SPA navigation

Icons and Fonts: Google Fonts and FontAwesome for a polished appearance

## Directory Structure

frontend/
├── public/            # Static assets (favicon, index.html)
├── src/               # Source code
│   ├── components/    # Reusable UI components
│   │   ├── BlogPreview.jsx
│   │   ├── Spinner.jsx
│   │   └── Header.jsx
│   ├── pages/         # Page-level components
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   └── HomePage.jsx
│   ├── styles/        # Custom CSS stylesheets
│   │   ├── BlogPage.css
│   │   ├── BlogDetailPage.css
│   │   └── Spinner.css
│   ├── App.js         # Root application component
│   ├── index.js       # Entry point for React
│   └── utils/         # Utility functions
├── package.json       # Project dependencies and scripts
└── README.md          # Documentation

## Development Workflow

# Local Development:

The app uses create-react-app as the scaffolding tool.

Start the development server using npm start.

# Styling:

Modular CSS files for each page/component.

Responsive breakpoints for various screen sizes.

# Routing:

React Router DOM handles navigation between the blog page, blog detail view, and home.

# Testing:

Debug using browser developer tools.

Use mock data during API outages.

# API Integration

The frontend communicates with the backend API for dynamic content. The key endpoints used are:

# Blogs:

GET /api/blogs - Fetches a list of all blogs.

GET /api/blogs/:id - Retrieves detailed content for a specific blog.

# Projects:

GET /api/projects - Fetches all projects.

# Resume:

GET /api/resume - Downloads the resume file.

Error handling ensures users see fallback messages in case of API issues.

UI/UX Design

# Theme:

Modern design with clean lines and vibrant accents.

Blue as the primary color (#0077ff) for consistency.

# Accessibility:

ARIA attributes for screen reader compatibility.

Keyboard navigation support.

# Animations:

Smooth hover effects and transitions for interactive elements.

# Future Enhancements

Add light/dark theme toggle.

Implement user authentication for managing blogs.

Enhance the project section with video demos.

Add multi-language support for a global audience.

### Contact Information

For contributions, questions, or collaborations, feel free to reach out:

Email: ramosnjoro@gmail.com

We welcome feedback and contributions to improve the project further.