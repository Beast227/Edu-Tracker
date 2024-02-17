import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from "./pages/admin/Dashboard";
import About from "./pages/About";
import StudentSignup from "./pages/Signup";
import Sidebar from './components/Sidebar';
import Home from './components/MainHome';
import AdminHome from './pages/admin/AdminHome';
import StudentHome from './pages/student/StudentHome';
import GradeBook from './pages/student/GradeBook';
import Achievements from './pages/student/Achivements';
import Feedback from './pages/Feedback';

const App = () => {
  const [userType, setUserType] = useState(null);

  // Check authentication state when the app initializes
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleSignup = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type); // Store user type in localStorage
  };

  const handleLogout = () => {
    setUserType(null);
    localStorage.removeItem('userType'); // Remove user type from localStorage
  };

  const navigateToSignup = () => {
    // Redirect to signup page
    window.location.href = '/signup';
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home navigateToSignup={navigateToSignup} />} />
        {!userType ? (
          <Route path="/signup" element={<StudentSignup onSignup={handleSignup} />} />
        ) : userType === 'admin' ? (
          <Route
            path="/*"
            element={
              <Sidebar userType={userType} handleLogout={handleLogout}>
                <Routes>
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/ADHome" element={<AdminHome/>}/>
                </Routes>
              </Sidebar>
            }
          />
        ) : (
          <Route
            path="/*"
            element={
              <Sidebar userType={userType} handleLogout={handleLogout}>
                <Routes>
                  <Route path="/STHome" element={<StudentHome/>}/>
                  <Route path="/about" element={<About />} />
                  <Route path="/GradeBook" element={<GradeBook/>}/>
                  <Route path="/Achievements" element={<Achievements/>}/>
                  <Route path="/Feedback" element={<Feedback/>}/>
                </Routes>
              </Sidebar>
            }
          />
        )}
        {userType && <Route path="/" element={<Navigate replace to="/" />} />}
      </Routes>
    </Router>
  );
};

export default App;
