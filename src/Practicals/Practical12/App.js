// App.js


import './Style.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
  
    const accessKey = 'o1VWrQxk-tIdMVXah760jqa3YYIGYdFCKdCIICmPebU';
  
    const searchImages = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`
        );
        setImages(response.data.results);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    useEffect(() => {
      if (query) {
        searchImages();
      }
    }, [query]);

  return (
<div className="image-search-container">
    <h1>Search using Reacts From Unsplash</h1>
      <input
        type="text"
        placeholder="Search for images"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.urls.regular} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
}

export default App;
