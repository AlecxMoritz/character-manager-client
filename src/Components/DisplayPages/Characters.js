import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import CharacterOverview from '../OverviewViews/CharacterOverview';

class Characters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        this.getCharacters();
    }

    getCharacters = () => {
        fetch('http://localhost:4050/api/characters/', {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                characters : data
            })
        })
        .catch(err => console.log(err));
    };


    render() {
        const characters = this.state.characters
        const display = characters.length > 0 ? <div>
                <h2>Your Characters</h2>
                {characters.map((character, index) => {
                    return <CharacterOverview key={index} character={character} />
                    }) }
        </div>
            : <p>No Characters to Display</p>
        
        return (
            <div>
            <Container>
                <Row>
                    <Col xs="9">
                        { display }
                    </Col>
                    <Col xs="3">
                        <Button>Create a New Character</Button>
                    </Col>
                </Row>

            </Container>
            </div>
        )
    }
}

export default Characters;