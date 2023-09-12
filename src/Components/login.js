import React, { useState } from 'react';
import { auth } from './firebase.js';
import { Link,useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Use navigate to navigate to the dashboard
      navigate('/plan');
    } catch (error) {
      setError('Invalid email or password. Please try again.');
      console.error('Login error:', error);
    }

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className='wrap-signup align-items-center bg'>
      <div className='sign-up border-5 px-4 py-4'>
        <h2 className='heading pb-2'>Login To Your Account</h2>
        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
        <p className='py-3 text-center'>
          New To MyApp? <Link to="/">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
