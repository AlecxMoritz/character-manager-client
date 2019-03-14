import React from 'react';
import {
    Card,
    CardHeader,
    CardText,
    CardBody
} from 'reactstrap';
import { Link } from 'react-router-dom';

const styles = {
    margin: '1em'
}

const linkStyles = {
    textDecoration : 'none',
    color : 'black'
}

class CharacterOverview extends React.Component {
    render() {
        return (
            <Link style={linkStyles} to={{
                pathname: '/character/',
                state: {
                    character : this.props.character
                }
            }}>
                <div style={styles}>
                    <Card>
                        <CardHeader>{this.props.character.name}</CardHeader>
                        <CardBody>
                        <CardText>{this.props.character.class}</CardText>
                        <CardText>{this.props.character.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </Link>
        )
    }
}

export default CharacterOverview;