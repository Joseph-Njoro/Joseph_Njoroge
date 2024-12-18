// src/components/BlogPost.jsx
import React, { useEffect, useState } from 'react';

const BlogPost = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Fetch the blog post data from your API or backend
    fetch(`/api/blogs/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
