import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = ({ blog }) => {
  return (
    <div className="blog-preview">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-excerpt">{blog.content.slice(0, 150)}...</p>
      <div className="blog-meta">
        <span className="blog-tags">Tags: {blog.tags.join(', ')}</span>
        <Link to={`/blog/${blog.id}`} className="read-more-btn">Read More</Link>
      </div>
    </div>
  );
};

export default BlogPreview;
