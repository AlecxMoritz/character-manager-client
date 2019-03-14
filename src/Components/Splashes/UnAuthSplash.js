import React from 'react';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';

// stylistic imports
import { Button } from 'reactstrap';

const styles = {
    height: '80%',
    width: '40%',
    margin: 'auto'
}

class UnAuthSplash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true
        };
    };

    toggleLogin = () => {
        this.setState({
            login: !this.state.login
        });
    };

    render() {
        const display = this.state.login ? <Login setToken={this.props.setToken} /> : <Signup setToken={this.props.setToken} />
        const action = this.state.login ? 'login' : 'signup'
        const text = this.state.login ? 'Or sign up' : 'I have an account'
        return (
            <div>
                <h1>Welcome to RP.ME</h1>
                <h3>Your Go To Character Manager!</h3>
                <hr />
                <div style={styles}>
                    <p>Please {action} to continue.</p>
                    <p onClick={this.toggleLogin}>{text}</p>

                    {display}
                </div>
            </div>
        )
    };
};

export default UnAuthSplash;