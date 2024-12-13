import React, { useEffect, useState } from 'react';
import BlogPreview from '../components/BlogPreview';
import '../styles/BlogPage.css'; // Custom styles
import Spinner from '../components/Spinner'; // Loading spinner component

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State for error handling

  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      try {
        const response = await fetch('http://localhost:5000/api/blogs'); // Ensure this URL is correct
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs. Please try again later.'); // Set error message
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Search and Filter Logic
  useEffect(() => {
    const filtered = blogs.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'All' || blog.tags.some(tag => tag.toLowerCase() === category.toLowerCase());
      return matchesSearch && matchesCategory;
    });
    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchQuery, category, blogs]);

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-page">
      <h2 className="page-title">Blog Articles</h2>

      {/* Search Bar and Filter */}
      <div className="blog-controls">
        <input
          type="text"
          placeholder="Search blogs..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="category-filter"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Personal">Personal</option>
          <option value="Tutorial">Tutorial</option>
        </select>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="error-message">{error}</p> // Display error message if there is an error
      ) : (
        <>
          <div className="blog-list">
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <BlogPreview key={blog._id} blog={blog} /> // Use blog._id as key
              ))
            ) : (
              <p>No blogs found.</p>
            )}
          </div>

          {/* Pagination */}
          {filteredBlogs.length > blogsPerPage && ( // Only show pagination if there are enough blogs
            <div className="pagination">
              {Array.from({ length: Math.ceil(filteredBlogs.length / blogsPerPage) }, (_, i) => (
                <button
                  key={i + 1}
                  className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogPage;