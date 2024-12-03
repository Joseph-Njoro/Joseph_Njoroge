#!/bin/bash

# Define the project name and directory
PROJECT_NAME="vite-frontend"
PROJECT_DIR="$HOME/Documents/Alx_Backend_specializaton/Joseph_Njoroge/$PROJECT_NAME"

echo "Setting up Vite project in: $PROJECT_DIR"

# Create the project directory
mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR" || exit

# Initialize a Vite React project
echo "Initializing Vite project with React template..."
npm create vite@latest "$PROJECT_NAME" -- --template react

# Move into the project directory
cd "$PROJECT_NAME" || exit

# Install dependencies
echo "Installing dependencies..."
npm install

# Install Tailwind CSS and dependencies
echo "Installing Tailwind CSS..."
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Configure Tailwind CSS
echo "Configuring Tailwind CSS..."
cat > tailwind.config.js <<EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
EOL

# Set up Tailwind in CSS
echo "Setting up Tailwind CSS in the project..."
cat > src/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Clean up default files and add custom structure
echo "Setting up custom directory structure..."
rm -rf src/assets
mkdir src/components src/pages

# Add a sample component
cat > src/components/HelloWorld.jsx <<EOL
import React from 'react';

const HelloWorld = () => {
  return (
    <div className="text-center p-4 text-blue-600">
      <h1 className="text-3xl font-bold">Welcome to Vite + React + Tailwind CSS!</h1>
    </div>
  );
};

export default HelloWorld;
EOL

# Update main.jsx to use the sample component
cat > src/main.jsx <<EOL
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloWorld from './components/HelloWorld';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>
);
EOL

# Final message
echo "Vite project setup complete!"
echo "Navigate to the project directory: cd $PROJECT_DIR/$PROJECT_NAME"
echo "Start the development server with: npm run dev"
