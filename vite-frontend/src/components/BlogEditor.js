import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'; // Dynamically import ReactQuill to avoid SSR (Server Side Rendering) issues
import 'react-quill/dist/quill.snow.css'; // Import Quill's default Snow theme styles

// Dynamically import ReactQuill so it doesn't break SSR
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

/**
 * BlogEditor component
 * A custom rich-text editor for use in the AdminJS panel, utilizing ReactQuill.
 * 
 * @param {Object} props - The component props.
 * @param {string} props.property - The name of the property (field) in the AdminJS resource to be edited.
 * @param {Object} props.record - The record (blog post) being edited.
 * @param {Function} props.onChange - Function passed by AdminJS to update the value in the backend.
 */
const BlogEditor = ({ property, record, onChange }) => {
  // Initialize the editor's content based on the record's current value for the property.
  const [editorContent, setEditorContent] = useState(record ? record.params[property] : '');

  /**
   * Handle changes in the editor content.
   * Updates the local state and also notifies AdminJS to save the updated value.
   * 
   * @param {string} value - The new content value from the editor.
   */
  const handleEditorChange = (value) => {
    setEditorContent(value); // Update the local state with the new content.
    onChange(property, value); // Pass the updated content to AdminJS to update the backend.
  };

  /**
   * Synchronize the editor content with the backend when the record changes.
   * This ensures that the editor content matches the current value of the record.
   */
  useEffect(() => {
    if (record && record.params[property]) {
      setEditorContent(record.params[property]);
    }
  }, [record, property]); // Re-run this effect when `record` or `property` changes.

  return (
    <div className="blog-editor">
      {/* Render the ReactQuill editor, passing value and onChange handler */}
      <ReactQuill
        value={editorContent} // The value of the editor is tied to the local state
        onChange={handleEditorChange} // Handle changes to update the content
        modules={{
          toolbar: [
            [{ header: '1' }, { header: '2' }, { font: [] }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ align: [] }],
            ['link'],
            ['image'],
          ], // Define the toolbar options for the editor
        }}
        theme="snow" // Use the 'snow' theme from Quill
      />
    </div>
  );
};

export default BlogEditor;