// Blog.js
import React, { useState } from 'react';
import './Style.css';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    {
      id: 2,
      title: 'CSS-in-JS Techniques',
      content: 'Sed ut libero eu ante interdum fermentum. Duis non felis vel erat ...',
    },
    // Add more blog posts as needed
  ]);

  return (
    <div className="page-container">
      <h2>My Blog</h2>
      <p className='blog-post'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut libero eu ante
        interdum fermentum. Duis non felis vel erat fermentum dapibus.
      </p>
      <p>
        Quisque vestibulum, elit nec tristique ullamcorper, arcu justo dignissim augue,
        ut imperdiet quam mi vitae ex.
      </p>
    </div>
  );
};

export default Blog;
