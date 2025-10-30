import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from './firebase'; // Import auth and db
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); // Required by task [cite: 32]
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // 1. Validate Passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // 2. Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 3. Store additional user info in Firestore 
      await setDoc(doc(db, "users", user.uid), {
        firstName: firstName,
        lastName: lastName,
        email: email
      });
      
      // 4. Redirect to login page on success 
      navigate('/'); 

    } catch (err) {
      setError(err.message); // Display Firebase errors
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleRegister}>
        <h1>Create a DEV@Deakin Account</h1> {/* [cite: 40] */}
        
        <div className="form-group">
          <label>Name</label> {/* [cite: 43] */}
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Last Name</label> {/* [cite: 32] */}
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label> {/* [cite: 46] */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label> {/* [cite: 47] */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm password</label> {/* [cite: 48] */}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        
        <button type="submit" className="auth-button">Create</button> {/* [cite: 49] */}
        
        <Link to="/" className="auth-link">Already have an account? Login</Link>
      </form>
    </div>
  );
}

export default RegisterPage;