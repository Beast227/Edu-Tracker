
import PropTypes from 'prop-types';
import './MainHome.css'
const MainHome = ({ navigateToSignup }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Our Services</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div id="about">
        <h1>About Us</h1>
        <p>This is a brief description of our company and what we do.</p>
      </div>
      <div onClick={navigateToSignup}>Get Started</div>
      <h1>Our Services</h1>
      <div id="services">
        
        <div className="service">
          <h2>Student Progress Tracking</h2>
          <p>We provide a comprehensive system to track the progress of students throughout their academic journey from 1st to 8th semester.</p>
        </div>
        <div className="service">
          <h2>Personalized Learning Paths</h2>
          <p>Our platform offers personalized learning paths tailored to each student&apos;s strengths and weaknesses, helping them achieve their academic goals.</p>
        </div>
        <div className="service">
          <h2>Performance Analytics</h2>
          <p>Get detailed insights into student performance with our advanced analytics tools, allowing you to identify areas for improvement and track growth over time.</p>
        </div>
      </div>
      <div id="login">
        <h1>Login</h1>
        <p>Here you can provide a login form for students and admins.</p>
      </div>
      <footer>
        <p>Contact us: your@email.com</p>
      </footer>
      <div onClick={navigateToSignup}>Get Started</div>
    </div>
  );
};

MainHome.propTypes = {
  navigateToSignup: PropTypes.func.isRequired,
};

export default MainHome;
