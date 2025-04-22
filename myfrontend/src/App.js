import React, { useState, useEffect } from 'react';
import './App.css'; // CSS file we'll create
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(query);
    setQuery('');
  };

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hello/')
    .then((response) => {
      setMessage(response.data.message);
    });
  }, [])

  return (
    <div className="container">
      <h1 className="header">Welcome!</h1>
      <h2 className="sub-header">Enter your input</h2>

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What's your query?"
          className="input-box"
        />
      </form>

      <div>
        <h1>{message}</h1>
      </div>

      <div className="terminal">
        {output && <p> >> {output}</p>}
      </div>
    </div>
  );
}

export default App;
