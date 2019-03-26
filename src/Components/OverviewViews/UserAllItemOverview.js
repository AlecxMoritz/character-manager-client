import React from 'react';
import {
    Card,
    CardHeader,
    CardText,
    CardBody,
} from 'reactstrap';
import DeleteItemButton from '../Buttons/DeleteItemButton';
import EditItemModal from '../EditPages/EditItemModal';

const cardStyles = {
    margin : '1em',
    width : '20vw'
}

const UserAllItemOverview = (props) => {
    return (
        <Card style={cardStyles}>
            <CardHeader>{ props.item.name }</CardHeader>
            <CardBody>
                <CardText>{ props.item.flavorText }</CardText>
                <CardText>Quantity : { props.item.quantity }</CardText>
                <CardText>Value : { props.item.value }</CardText>
                <CardText>Weight : { props.item.weight }</CardText>
                <EditItemModal item={props.item} characterId={props.characterId} fetchItems={props.fetchItems} />
                <DeleteItemButton type="item" id={props.item.id} fetchItems={props.fetchItems} characterId={props.characterId} name={props.item.name} />
            </CardBody>
        </Card>
    )
}

export default UserAllItemOverview;