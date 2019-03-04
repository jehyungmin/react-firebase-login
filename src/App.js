import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      user: {},
    });
    
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user : user });
        alert("로그인 성공");
        // localStorage.setItem('user', user.uid);
      }  else {
        this.setState({ user: null });
        

        // localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.user ? (<Home/>) : (<Login/>)} */}
        {this.state.user ? <Home/> : <Login/>} 
      </div>
    );
  }
}

export default App;
