import React, { Component } from 'react';

// component imports
import AuthSplash from './Components/Splashes/AuthSplash';
import UnAuthSplash from './Components/Splashes/UnAuthSplash';

import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
    
    this.setToken = this.setToken.bind(this);
    this.clearToken = this.clearToken.bind(this);
  }

  clearToken = () => {
    this.setState({
      token : ''
    })
    localStorage.removeItem('token');
  }
  
  componentDidMount() {
    const token = localStorage.getItem('token');
    
    if(token !== null && token !== undefined && token.length > 0) {
      this.setState({
        token : token
      })
    }
  }
  
  setToken = (token) => {
    this.setState({
      token : token
    });
    localStorage.setItem('token', token);
  }
  
  render() {
    const home = this.state.token ? <AuthSplash clearToken={this.clearToken} /> : <UnAuthSplash setToken={this.setToken}/>
    return (
      <div>
        { home }
      </div>
    );
  }
}

export default App;

// <Router>
// Nav
// <Route path="/" exact component={Index} />
        // <Route path="/about/" component={About} />
        // <Route path="/users/" component={Users} />
  // </Router>