import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import FrontPage from "./components/layout/FrontPage";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create-note" component={CreateProject} />
            </Switch>
            
          </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
