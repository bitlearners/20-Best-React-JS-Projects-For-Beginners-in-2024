// App.js
import React from 'react';
import { MyContextProvider } from './MyContext';
import ChildComponent from './ChildComponent';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <MyContextProvider>
      <div className="app-container">
        <h1>React Context API</h1>
        <ChildComponent />
      </div>
    </MyContextProvider>
  );
};

export default App;
