import AdminJS from 'adminjs';
import { buildRouter } from '@adminjs/express';
import { Database, Resource } from '@adminjs/mongoose'; // Import both Database and Resource from @adminjs/mongoose

import Blog from '../models/Blog.js';
import Contact from '../models/Contact.js';
import Project from '../models/Project.js';

// Register the adapter with both Database and Resource
AdminJS.registerAdapter({ Database, Resource });

// Initialize AdminJS
const adminJs = new AdminJS({
  resources: [
    {
      resource: Blog,
      options: {
        parent: { name: 'Blog Management' },
        properties: {
          content: {
            isVisible: { list: true, filter: true, show: true, edit: true },
            custom: {
              component: {
                name: 'BlogEditor', // This is how AdminJS identifies the component
                width: '100%',
              },
            },
          },
        },
      },
    },
    {
      resource: Contact,
      options: { parent: { name: 'Contact Management' } },
    },
    {
      resource: Project,
      options: { parent: { name: 'Project Management' } },
    },
  ],
  rootPath: '/admin', // Set the root path for AdminJS
  branding: {
    companyName: 'CODEFOLIO',
  },
  assets: {
    // Provide the path to the frontend where BlogEditor is located (after building your frontend)
    styles: ['/static/css/blogEditor.css'], // Update with the correct path to the CSS file
    scripts: ['/static/js/blogEditor.js'], // Update with the correct path to the JS file containing the BlogEditor component
  },
});

// Build and add AdminJS router to Express app
const buildAdminRouter = (app) => {
  const router = buildRouter(adminJs);
  app.use(adminJs.options.rootPath, router); // Add AdminJS router under /admin path
  console.log('AdminJS router has been set up at /admin');
};

export default buildAdminRouter;