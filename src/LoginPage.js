import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // 1. Sign in with Firebase Auth
      await signInWithEmailAndPassword(auth, email, password);
      
      // 2. Redirect to home page on success 
      navigate('/home');

    } catch (err) {
      // 3. Show error message on failure 
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin}>
        <h1>DEV@Deakin</h1> {/* [cite: 37] */}
        
        <div className="form-group">
          <label>Your email</label> {/* [cite: 42] */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Your password</label> {/* [cite: 44] */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>} {/*  */}
        
        <button type="submit" className="auth-button">Login</button> {/* [cite: 45] */}
        
        <Link to="/register" className="auth-link">Sign up</Link> {/*  */}
      </form>
    </div>
  );
}

export default LoginPage;