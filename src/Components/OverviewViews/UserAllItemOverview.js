import React from 'react';
import {
    Card,
    CardHeader,
    CardText,
    CardBody,
    Button
} from 'reactstrap';

const cardStyles = {
    margin : '1em',
    maxWidth : '20vw'
}

const UserAllItemOverview = (props) => {
    console.log(props);
    return (
        <Card style={cardStyles}>
            <CardHeader>{ props.item.name }</CardHeader>
            <CardBody>
                <CardText>{ props.item.flavorText }</CardText>
                <CardText>Value : { props.item.value }</CardText>
                <CardText>Weight : { props.item.weight }</CardText>
                <Button color="primary">Edit</Button>
            </CardBody>
        </Card>
    )
}

export default UserAllItemOverview;