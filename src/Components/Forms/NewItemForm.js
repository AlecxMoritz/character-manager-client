import React from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Container, Col, Row, Button, Form, Label, FormGroup, Input } from 'reactstrap';

class NewItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.item[0].name,
            flavorText: this.props.item[0].flavorText,
            value: this.props.item[0].value,
            weight: this.props.item[0].weight,
            quantity : 0
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input type="textarea" name="flavorText" value={this.state.flavorText} onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Value</Label>
                        <Input type="number" name="value" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Weight</Label>
                        <Input type="number" name="weight" value={this.state.weight} onChange={(e) => this.handleChange(e)} />
                    </FormGroup>
                </Form>
                <Button onClick={this.onSubmit}>Save Item</Button>
            </Container>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <NewItemForm {...props} auth={auth} />}
    </AuthContext.Consumer>
)