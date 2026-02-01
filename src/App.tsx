import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <Router basename="/myprofile">
      <Routes>
        {/* neww route for skill */}
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;