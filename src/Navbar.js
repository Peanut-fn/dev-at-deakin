import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Navbar.css'; // We will create this

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // This hook checks if the user is logged in or out
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="navbar">
      <Link to={user ? "/home" : "/"} className="navbar-logo">
        DEV@Deakin
      </Link>
      <ul className="navbar-links">
        {user ? (
          // If logged IN
          <>
            <li>
              <span className="navbar-email">Welcome, {user.email}</span>
            </li>
            <li>
              <button onClick={handleSignOut} className="navbar-button">Sign Out</button>
            </li>
          </>
        ) : (
          // If logged OUT
          <>
            <li>
              <Link to="/" className="navbar-link">Login</Link>
            </li>
            <li>
              <Link to="/register" className="navbar-link">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;