import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginform from './components/loginform';
import SignupForm from './components/signupform';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<Loginform />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
