import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container, Button } from 'reactstrap';
import SelectClass from '../Selects/SelectClass';

const buttonStyles = {
    color : 'white',
    textDecoration: 'none'
};

class CreateCharacter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            charClasses : []
        }
    }

    componentDidMount() {
        this.fetchClassData();
    }


    fetchClassData = () => {
        fetch('http://localhost:4050/api/data/classes/', {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                charClasses : data
            })
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="2">
                        <Button>
                            <Link style={buttonStyles} to="/characters/">
                                Back
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <SelectClass charClasses={this.state.charClasses} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CreateCharacter;