import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className='App'>
    <header className="navbar">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} />
      </Routes>
    </header>
    <main>
      <h1>Your pages render here</h1> 
    </main>

    </div>
  );
}

export default App;