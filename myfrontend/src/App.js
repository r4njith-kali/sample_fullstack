import React, { useState } from 'react';
import './App.css'; // CSS file we'll create

function App() {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:8000/api/encode/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: query}),
      });

      const data = await response.json();
      if (data.encoded) {
        setOutput(data.encoded);
      } else {
        setOutput('Error processing input.');
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('Server error.');
    }
  };

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

      <div className="terminal">
        {output && <p> >> {output}</p>}
      </div>
    </div>
  );
}

export default App;
