import React, { useState } from 'react';
import './BottomNavbar.css';

function BottomNavbar() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        try {
            const response = await fetch('http://localhost:3000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                alert('Subscription successful! Check your email for a welcome message.');
                setEmail(''); // Clear the input field
            } else {
                alert('Subscription failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="bottomnavbar">
            <div className="navbar-brand">
                <span>SIGN UP FOR OUR DAILY INSIDER</span>
            </div>
            <div className="navbar-search">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="navbar-buttons">
                <button className="btn" onClick={handleSubscribe} disabled={loading}>
                    {loading ? 'Subscribing...' : 'Subscribe'}
                </button>
            </div>
        </div>
    );
}

export default BottomNavbar;