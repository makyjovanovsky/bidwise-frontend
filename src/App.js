import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <React.Fragment>
              <ConditionalNavbar />
              <Routes>
                <Route path="/register" element={<Register />} />
                {/* Define other routes here */}
                <Route path="/login" element={<Login />} />
              </Routes>
            </React.Fragment>
          }
        />
      </Routes>
    </Router>
  );
}

function ConditionalNavbar() {
  const location = useLocation();

  // Render the Navbar component except when navigating to /register
  if (location.pathname === '/register' || location.pathname === '/login') {
    return null;
  }

  return <Navbar />;
}

export default App;
