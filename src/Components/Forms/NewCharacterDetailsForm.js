import React from 'react';
import { Container, Row, Col, FormGroup, Label, Form, Input, FormText, Button } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';

class NewCharacterDetailsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : '',
            class : this.props.selectedClass[0].name,
            description : this.props.selectedClass[0].description,
            bio : '',
            charisma : this.props.selectedClass[0].charisma,
            constitution : this.props.selectedClass[0].constitution,
            dexterity : this.props.selectedClass[0].dexterity,
            intelligence : this.props.selectedClass[0].intelligence,
            strength : this.props.selectedClass[0].strength,
            wisdom : this.props.selectedClass[0].wisdom,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4050/api/characters', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : this.props.auth
            },
            body : JSON.stringify({ character : this.state })
        })
        .then(response => response.json())
        .then(data => window.location.href = '/characters')
        .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>
                <Form>
                    <h2>New {this.state.class}</h2>
                    <hr />
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input name="name" type="text" required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Class Name</Label>
                                <Input name="class" type="text" value={this.state.class} required onChange={(e) => this.handleChange(e)} />
                                <FormText>The name for your character's class, or occupation if they don't partake in combat.</FormText>
                            </FormGroup>
                            <FormGroup>
                                <Label>Class Description</Label>
                                <Input name="description" type="textarea" value={this.state.description} required onChange={(e) => this.handleChange(e)} />
                                <FormText>Description of this character's class, important notes, or perhaps generalized information about this character is not very combative.</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="4">
                            <FormGroup>
                                <Label>Charisma</Label>
                                <Input name="charisma" type="number" value={this.state.charisma} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Constitution</Label>
                                <Input name="constitution" type="number" value={this.state.constitution} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Dexterity</Label>
                                <Input name="dexterity" type="number" value={this.state.dexterity} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Intelligence</Label>
                                <Input name="intelligence" type="number" value={this.state.intelligence} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Strength</Label>
                                <Input name="strength" type="number" value={this.state.strength} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Wisdom</Label>
                                <Input name="wisdom" type="number" value={this.state.wisdom} required onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                        </Col>
                        <Col xs="8">
                            <FormGroup>
                                <Label>Character Bio</Label>
                                <Input name="bio" type="textarea" required onChange={(e) => this.handleChange(e)} />
                                <FormText>Your character's backstory. Were they abandoned as a child? Raised by wolves? Blind earth bending badgers? Were they raised a rich squire? Whatever happened. Record it here.</FormText>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Button color="success" onClick={(e) => this.handleSubmit(e)}>Create</Button>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        { auth => <NewCharacterDetailsForm {...props} auth={auth} /> }
    </AuthContext.Consumer>
);