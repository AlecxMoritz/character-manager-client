/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form, Label } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';

class EditItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            characterId: this.props.characterId,
            id: this.props.item.id,
            name: this.props.item.name,
            flavorText: this.props.item.flavorText,
            weight: this.props.item.weight,
            value: this.props.item.value,
            quantity: this.props.item.quantity
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = () => {
        fetch(`http://localhost:4050/api/inv-items/${this.state.characterId}/${this.state.id}`, {
            method : 'PUT',
            body : JSON.stringify({ item : this.state }),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : this.props.auth
            }
        })
        .then(response => response.json())
        .then(() => {
            this.toggle();
            this.props.fetchItems();
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Edit</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Item { this.state.id }</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Input name="flavorText" type="text" value={this.state.flavorText} onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Weight</Label>
                                <Input name="weight" type="number" value={this.state.weight} onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Value</Label>
                                <Input name="value" type="number" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input name="quantity" type="number" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>Update Item</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default props => (
    <AuthContext.Consumer>
        { auth => <EditItemModal {...props} auth={auth} />}
    </AuthContext.Consumer>
);