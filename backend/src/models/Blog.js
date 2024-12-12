import mongoose from 'mongoose';

// Define the schema for Blog
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [String],
  created_at: { type: Date, default: Date.now },
});

// Export the model using ES Module export
const Blog = mongoose.model('Blog', blogSchema);
export default Blog;