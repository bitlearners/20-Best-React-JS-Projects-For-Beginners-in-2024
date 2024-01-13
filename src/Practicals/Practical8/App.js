import React, { useState, useEffect } from 'react';
import './Style.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="api-data-container">
      <h2>Data from REST API</h2>
      <ul className="post-list">
        {data.map((item) => (
          <li key={item.id} className="post-item">
            <strong className="post-id">#{item.id}</strong>
            <h3 className="post-title">{item.title}</h3>
            <p className="post-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
