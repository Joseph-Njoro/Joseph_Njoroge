### Backend API for Portfolio Website

This repository contains the backend of a portfolio website, built with Node.js, Express.js, and MongoDB. The backend serves APIs for blogs, projects, contact form submissions, and more. This README provides detailed instructions for setup, usage, and contribution.

## Table of Contents

Project Overview

Features

Technologies Used

Installation

Configuration

Available API Endpoints

Projects API

Blogs API

Contact API

Resume Download API

Error Handling

Contributing

License

## Project Overview

This backend powers a full-stack portfolio website. It provides RESTful APIs to manage and display:

Projects showcased on the portfolio.

Blog posts.

Contact form submissions.

A downloadable resume feature.

The backend is secure, scalable, and easy to configure.

## Features

Projects Management: API to fetch details about projects.

Blogs Management: API to list, filter, and fetch individual blog details.

Contact Form: API to submit and manage contact form data.

Resume Download: Serve a downloadable resume file.

Error Handling: Centralized error handling for consistent responses.

Environment Configurations: Securely handles secrets using .env files.

CORS and Security: Configured with Helmet.js and CORS for security.

## Technologies Used

Node.js: JavaScript runtime for building scalable network applications.

Express.js: Web application framework for Node.js.

MongoDB: NoSQL database for data persistence.

Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.

Helmet.js: Security middleware for Express.js.

Cors: Middleware for enabling Cross-Origin Resource Sharing.

Installation

Follow the steps below to set up the backend locally:

Clone the Repository:

git clone <repository-url>
cd <repository-name>

Install Dependencies:

npm install

Set Up MongoDB:

Create a MongoDB cluster using MongoDB Atlas or use a local MongoDB instance.

Obtain the MongoDB URI.

Environment Variables:

Create a .env file in the root directory.

Add the following environment variables:

PORT=5000
MONGODB_URI=<your-mongodb-uri>

Start the Server:

npm start

The server will run on http://localhost:5000.

Configuration

.env File

The backend uses environment variables for sensitive configurations. Ensure you have the following in your .env file:

PORT=5000
MONGODB_URI=<your-mongodb-connection-string>

Available API Endpoints

Projects API

Fetch All Projects

Endpoint: GET /api/projects

Description: Retrieves all projects.

Response:

[
  {
    "_id": "64b4c8e7d9f79a3b7a36c142",
    "title": "Project Title",
    "description": "Description of the project",
    "tags": ["Tag1", "Tag2"],
    "url": "https://example.com/project"
  }
]

Blogs API

Fetch All Blogs

Endpoint: GET /api/blogs

Description: Retrieves all blogs.

Response:

[
  {
    "_id": "64b4c8e7d9f79a3b7a36c142",
    "title": "Blog Title",
    "content": "Blog content...",
    "tags": ["Tech", "Personal"],
    "createdAt": "2024-12-18T12:00:00.000Z"
  }
]

Fetch Blog by ID

Endpoint: GET /api/blogs/:id

Description: Retrieves a single blog by its ID.

Response:

{
  "_id": "64b4c8e7d9f79a3b7a36c142",
  "title": "Blog Title",
  "content": "Full blog content...",
  "tags": ["Tech", "Personal"],
  "createdAt": "2024-12-18T12:00:00.000Z"
}

Contact API

Submit Contact Form

Endpoint: POST /api/contact

Description: Submits a contact form.

Request Body:

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello!"
}

Response:

{
  "success": true,
  "message": "Contact form submitted successfully."
}

Resume Download API

Download Resume

Endpoint: GET /api/resume

Description: Serves a downloadable resume file.

Response: A PDF file is downloaded.

Error Handling

The backend includes centralized error handling to ensure consistent responses for all API endpoints.

Error Response Format:

{
  "error": "Error message here."
}

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

git checkout -b feature-name

Commit your changes with clear messages.

git commit -m "Add feature-name"

Push your branch and open a pull request.

License

This project is licensed under the MIT License.