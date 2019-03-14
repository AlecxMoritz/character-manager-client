import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';

const buttonStyles = {
    color : 'white'
}

class CharacterDetail extends React.Component {
    render() {
        const character = this.props.location.state.character;
        return (
            <Container>
                <Button>
                    <Link style={buttonStyles} to="/characters/">Back</Link>
                </Button>
                <Row>
                    <Col>
                        <h1>{character.name}</h1>
                        <h3>{character.class}</h3>
                        <p>{character.description}</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs="4">
                    <h4>Stats</h4>
                    <ul>
                        <li>Charisma : { character.charisma }</li>
                        <li>Constitution : { character.constitution }</li>
                        <li>Dexterity : { character.dexterity }</li>
                        <li>Intelligence : { character.intelligence }</li>
                        <li>Strength : { character.strength }</li>
                        <li>Wisdom : { character.wisdom }</li>
                    </ul>
                    </Col>
                    <Col xs="6">
                        <h2>Bio</h2>
                        <p>{ character.bio }</p>
                    </Col>
                </Row>
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

export default CharacterDetail;