import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Contact() {
    const navigate = useNavigate();
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contact Page</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button>
            <button onClick={() => navigate('/')}>
                Home
            </button>
            <button onClick={() => navigate('/about')}>
                About
            </button>
        </div>
    );
}

export default Contact;