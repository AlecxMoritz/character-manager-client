import React from 'react';
import {
    Container,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

const buttonStyles = {
    color : 'white',
    textDecoration: 'none'
}

const textAreaStyles = {
    height: '20em'
}

class EditCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.location.state.character.id,
            name : this.props.location.state.character.name,
            class : this.props.location.state.character.class,
            description : this.props.location.state.character.description,
            bio : this.props.location.state.character.bio,
            charisma : this.props.location.state.character.charisma,
            constitution : this.props.location.state.character.constitution,
            dexterity : this.props.location.state.character.dexterity,
            intelligence : this.props.location.state.character.intelligence,
            strength : this.props.location.state.character.strength,
            wisdom : this.props.location.state.character.wisdom,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:4050/api/characters/${this.state.id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            },
            body : JSON.stringify({
                character : this.state
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err));
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col xs="4">
                        <Link style={buttonStyles} to="/characters/">
                            <Button color="primary">
                                Cancel
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <p>Scroll down to items this associated with this character</p>
                    </Col>
                    
                </Row>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Class</Label>
                            <Input type="text" name="class" value={this.state.class} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Description</Label>
                            <Input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                    <h4>Stats</h4>
                        <FormGroup>
                            <Label>Charisma</Label>
                            <Input type="number" name="charisma" value={this.state.charisma} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Constitution</Label>
                            <Input type="number" name="constitution" value={this.state.constitution} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Dexterity</Label>
                            <Input type="number" name="dexterity" value={this.state.dexterity} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Intelligence</Label>
                            <Input type="number" name="intelligence" value={this.state.intelligence} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Strength</Label>
                            <Input type="number" name="strength" value={this.state.strength} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Wisdom</Label>
                            <Input type="number" name="wisdom" value={this.state.wisdom} onChange={this.handleChange}/>
                        </FormGroup>
                        
                    </Col>
                    <Col xs="8">
                        <h2>Bio</h2>
                        <Input type="textarea" style={textAreaStyles} name="bio" value={this.state.bio} onChange={this.handleChange}/>
                    </Col>
                        
                <Button color="primary">Save</Button>
                </Row>
                </Form>
                <Row>
                    <Col>
                        <h3>Inventory</h3>
                        <p>Coming Soon</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Spells</h3>
                        <p>Coming Soon</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Weapons</h3>
                        <p>Coming Soon</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EditCharacter;    