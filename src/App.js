import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
      <Router>
          <div className="App">
              <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                  <div className="container">
                      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">
                                  <Link className="nav-link" to={"/login"}>Login</Link>
                              </li>
                              <li className="nav-item">
                                  <Link className="nav-link" to={"/register"}>Sign up</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <div className="auth-wrapper">
                  <div className="auth-inner">
                      <Switch>
                          <Route exact path='/' component={Login} />
                          <Route path="/login" component={Login} />
                          <Route path="/register" component={SignUp} />
                      </Switch>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
