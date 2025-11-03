import React from 'react';
import { auth } from './firebase'; // We just need auth to get the user's email

function HomePage() {
  const user = auth.currentUser; // Get the currently logged-in user

  return (
    // We can re-use the 'auth-container' style for a nice card effect
    <div className="auth-container">
      <h1>Dashboard</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
        Welcome back!
      </p>
      
      {/* We check if user exists before trying to show email */}
      {user ? (
        <p style={{ textAlign: 'center', color: '#555' }}>
          You are logged in as: <br /> <strong>{user.email}</strong>
        </p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default HomePage;