import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetailPage.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        console.log(`Fetching blog detail from: /api/blogs/${id}`); // Log the URL being fetched
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        
        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog detail:', error);
        setError('Failed to fetch blog details. Please try again later.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchBlogDetail();
  }, [id]);

  return (
    <div className="blog-detail-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p> // Display error message if there is an error
      ) : blog ? (
        <div>
          <h2 className="blog-detail-title">{blog.title}</h2>
          <div className="blog-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <p>No blog found.</p> // Handle case where blog is not found
      )}
    </div>
  );
};

export default BlogDetailPage;