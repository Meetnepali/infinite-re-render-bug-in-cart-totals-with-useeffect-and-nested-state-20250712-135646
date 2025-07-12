import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div style={{padding: 24}}>
        <h1>User Profiles</h1>
        <nav style={{marginBottom: 16}}>
          <Link to="/user/123">User 123</Link> | {' '}
          <Link to="/user/456">User 456</Link>
        </nav>
        <Routes>
          <Route path="/user/:userId" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
