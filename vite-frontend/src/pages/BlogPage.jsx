import React, { useEffect, useState } from 'react';
import BlogPreview from '../components/BlogPreview';
import '../styles/BlogPage.css'; // Custom styles

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="blog-page">
      <h2 className="page-title">Blog Articles</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogPreview key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
