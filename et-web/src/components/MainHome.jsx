
import PropTypes from 'prop-types';

const Home = ({ navigateToSignup }) => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={navigateToSignup}>Get Started</button>
    </div>
  );
};

Home.propTypes = {
  navigateToSignup: PropTypes.func.isRequired,
};

export default Home;
