import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import LandingPage from './LandingPage';
import AppLayout from './AppLayout';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      React protected route

      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />

          <ProtectedRoute
            exact
            path="/app" 
            component={AppLayout} 
          />

          <Route path="*" component={()=>"404 NOT FOUND"} />

        </Switch>
      </Router>

    </div>
  );
}

export default App;
