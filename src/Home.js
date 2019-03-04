import React, { Component } from 'react';
import fire from './config/Fire';

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="col-md-6">
                
                <h1>로그인 성공</h1>
                <button onClick={this.logout()}>로그아웃</button>
            </div>
        );
    }
}

export default Home;