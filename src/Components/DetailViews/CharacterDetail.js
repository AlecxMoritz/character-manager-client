import React from 'react';
import {
    Container,
    Row,
    Col,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import  DeleteButton  from '../Buttons/DeleteButton';
import InventoryItems from '../DisplayPages/InventoryItems';

const buttonStyles = {
    color : 'white',
    textDecoration: 'none'
}

class CharacterDetail extends React.Component {
    render() {
        const character = this.props.location.state.character;
        return (
            <Container>
                <Row>
                    <Col xs="4">
                        <Link style={buttonStyles} to="/characters/">
                            <Button color="primary">
                                Back
                            </Button>
                        </Link>
                    </Col>
                    <Col xs="4"></Col>
                    <Col xs="1">
                        <Link style={buttonStyles} to={{
                                pathname: '/edit/character/',
                                state: {
                                    character : character
                                }
                            }}>
                            <Button color="secondary">
                                Edit
                            </Button>
                        </Link>
                        <DeleteButton id={character.id} type="character" name={character.name}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>{character.name}</h1>
                        <hr />
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
                        <InventoryItems characterId={character.id} />
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