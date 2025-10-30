import React from 'react';
import { auth } from './firebase'; // <-- Import auth
import { signOut } from 'firebase/auth'; // <-- Import the signOut function
import { useNavigate } from 'react-router-dom'; // <-- Import useNavigate to redirect

function HomePage() {
  const navigate = useNavigate();

  // Create the sign-out function
  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign the user out
      navigate('/'); // Redirect to the login page
    } catch (err) {
      console.error("Error signing out: ", err);
    }
  };

  return (
    <div className="auth-container">
      <h1>Welcome!</h1>
      <p>You have successfully logged in.</p>
      
      {/* Add the sign-out button */}
      <button 
        onClick={handleSignOut} 
        className="auth-button" 
        style={{backgroundColor: '#dc3545'}} // Optional: style it red
      >
        Sign Out
      </button>
    </div>
  );
}

export default HomePage;