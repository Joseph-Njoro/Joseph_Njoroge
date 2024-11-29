const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  github_url: { type: String },
  live_demo_url: { type: String },
  image_url: { type: String },
  tech_stack: [String],
});

module.exports = mongoose.model('Project', projectSchema);
