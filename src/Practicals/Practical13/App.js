import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (query.trim() !== '') {
      const fetchVideos = async () => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              q: query,
              part: 'snippet',
              type: 'video',
              maxResults: 5,
              key: 'AIzaSyDPRmobz-L1p8WRdXzN53Iy5J7TqfkhkD4',
            },
          });

          setVideos(response.data.items);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };

      fetchVideos();
    }
  }, [query]);

  return (
    <div className="app">
      <h1>YouTube Video Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter search query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <iframe
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
