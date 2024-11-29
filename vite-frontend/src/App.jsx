import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import AboutMe from './pages/AboutMe';
import ProjectsPage from './pages/ProjectsPage';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
      <Footer /> {/* Add Footer component */}
    </BrowserRouter>
  );
}

export default App;