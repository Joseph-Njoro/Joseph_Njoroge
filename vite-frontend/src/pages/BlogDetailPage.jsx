import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import '../styles/BlogDetailPage.css';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        console.log(`Fetching blog detail from: /api/blogs/${id}`);
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog detail:', error);
        setError('Failed to fetch blog details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const handleExpand = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle('expanded');
    }
  };

  return (
    <div className="blog-detail-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : blog ? (
        <div>
          <h1 className="blog-detail-title">{blog.title}</h1>
          <div className="blog-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 {...props} className="section-heading" />,
                h2: ({node, ...props}) => <h2 {...props} className="section-heading" />,
                h3: ({node, ...props}) => <h3 {...props} className="section-heading" />,
                p: ({node, ...props}) => <p {...props} className="blog-paragraph" />,
                ul: ({node, ...props}) => <ul {...props} className="blog-list" />,
                ol: ({node, ...props}) => <ol {...props} className="blog-list" />
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </div>
      ) : (
        <p>No blog found.</p>
      )}
    </div>
  );
};

export default BlogDetailPage;