import React from 'react';
import {
    Form,
    Button,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:4050/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                    user : this.state
                })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.token);
            this.props.setToken(data.token)
        })
        .catch(err => console.log(err)); 
    }

    render() {
        return(
            <div>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <h2>Login to an Existing Account</h2>

                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="text" name="username" required onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" required onChange={this.handleChange}/>
                    </FormGroup>

                    <Button>Login</Button>
                </Form>
                
            </div>
        )
    }
}

export default Login;