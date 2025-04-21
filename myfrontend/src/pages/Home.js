import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Welcome Page</h2>
            <button onClick={() => navigate('/about')}>Go to About Page</button>
            <button onClick={() => navigate('/contact')}>Contacts Page</button>
        </div>

    );
}

export default Home;