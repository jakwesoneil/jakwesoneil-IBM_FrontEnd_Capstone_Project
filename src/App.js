import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Layout from './components/Landing_Page/Landing_page'};

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          {/* Add other routes here as needed */}
        </Routes>
      </>
    </Router>
  );
}

export default App;