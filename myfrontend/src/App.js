import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Mini Router Web App</h1>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
      </Routes>
    </div>
  );
}

export default App;