// App.js

import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div>
      <h1>Build Accordion in React

</h1>
<Accordion
  title="JavaScript"
  content="JavaScript is a versatile scripting language used primarily for building interactive web pages. It enables dynamic content, client-side validation, and asynchronous communication."
/>
<Accordion
  title="Machine Learning"
  content="Machine Learning is a subset of artificial intelligence that focuses on the development of algorithms allowing computers to learn patterns and make decisions without explicit programming. It finds applications in data analysis, pattern recognition, and prediction."
/>
<Accordion
  title="Web Development"
  content="Web Development involves the creation of websites or web applications. It encompasses various technologies like HTML, CSS, and JavaScript, along with frameworks and libraries like React, Angular, or Vue.js for building modern and responsive user interfaces."
/>

    
    </div>
  );
};

export default App;
