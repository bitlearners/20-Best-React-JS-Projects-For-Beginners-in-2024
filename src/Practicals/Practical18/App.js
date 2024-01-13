// src/App.js
import React from 'react';
import './Style.css';
import Button from './Button';
import Card from './Card';
import Container from './Container';
import Icon from './Icon';

const App = () => {

  return (
    <Container>
      <h1> Static Website Blog Page</h1>
      <Card title="What is React Js" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda vero illum odit voluptatibus ullam repellendus cumque. Eaque molestias dolorem accusamus! Ea dolorem magnam quod in, adipisci ad consequuntur nulla quasi." imageUrl="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    
      <Button onClick={() => alert('Button clicked')}>
        <Icon name="like" className="like-icon" />
        Like
      </Button>
    </Container>
  );
};

export default App;
