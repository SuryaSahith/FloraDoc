import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginform from './components/loginform';
import SignupForm from './components/signupform';
import './App.css';

function App() {
  return (
    <Router>
      <div className="page">
        <Switch>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/">
            <Loginform />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
