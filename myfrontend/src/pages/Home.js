import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Don't forget to import the CSS!

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome Page</h2>
            <div className = "home-container">
                <button className="big-button" onClick={() => navigate('/about')}>Go to About Page</button>
                <button onClick={() => navigate('/contact')}>Contacts Page</button>
            </div>
        </div>
    );
}

export default Home;
