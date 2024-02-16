
import  { useState } from 'react';
import './signup.css';
import PropTypes from 'prop-types';
const SignUp = ({ onSignup }) => {
    const [loginType, setLoginType] = useState('signup'); // Tracks whether it's login or signup
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isAdminLogin, setIsAdminLogin] = useState(false); // Track if it's admin login

    // Define temporary admin and student credentials
    const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
    const studentCredentials = { email: 'student@example.com', password: 'student123' };

    const handleLogin = (e) => {
        e.preventDefault();
        if (loginType === 'signup') {
            onSignup();
        } else {
            // Check if the entered credentials match the temporary admin or student credentials
            const credentials = isAdminLogin ? adminCredentials : studentCredentials;
            if (email === credentials.email && password === credentials.password) {
                // Admin or student login
                onSignup(isAdminLogin ? 'admin' : 'student');
            } else {
                // Invalid credentials
                setError('Invalid email or password');
            }
        }
    };

    return (
        <div className="form">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul className="tab-group">
                <li className={`tab ${loginType === 'signup' ? 'active' : ''}`}><a href="#signup" style={{ borderRadius: '15px!important', marginRight: '8px' }} onClick={() => setLoginType('signup')}>Sign Up</a></li>
                <li className={`tab ${loginType === 'login' ? 'active' : ''}`}><a href="#login" style={{ borderRadius: '15px!important', marginLeft: '8px' }} onClick={() => setLoginType('login')}>Log In</a></li>
            </ul>
            {loginType === 'login' && (
                <div className="user-type">
                    <label className="checkbox-label">
                        <input type="checkbox" checked={isAdminLogin} onChange={() => setIsAdminLogin(!isAdminLogin)} />
                        <span className="checkmark"></span>
                        Admin Login
                    </label>
                </div>
            )}
            <div className="tab-content">
                <div id="signup">
                    <h1>Register</h1>
                    <form onSubmit={handleLogin}>
                        <div className="top-row">
                            <div className="field-wrap">
                                <input type="text" required placeholder="First Name" />
                            </div>
                            <div className="field-wrap">
                                <input type="text" required placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="field-wrap">
                            <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="field-wrap">
                            <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="button button-block">Sign Up</button>
                    </form>
                </div>
                <div id="login">
                    <h1>Welcome Back!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="field-wrap">
                            <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="field-wrap">
                            <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button className="button button-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes = {
    onSignup: PropTypes.func.isRequired,
};

export default SignUp;
