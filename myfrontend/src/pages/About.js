import React from 'react';
import { useNavigate } from 'react-router-dom';

function About() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>
                About Page
            </h2>
            <button onClick={() => navigate('/')}>Go back Home</button>
            <button onClick={() => navigate('/contact')}>Contact page</button>
        </div>
    );
}

export default About;
