import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Form, Label } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';

class CreateItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            characterId: this.props.characterId,
            itemId: '',
            name: '',
            flavorText: '',
            weight: '',
            value: '',
            quantity: 1
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
        fetch(`http://localhost:4050/api/inv-items/${this.state.characterId}`, {
            method: 'POST',
            body: JSON.stringify({ item: this.state }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.auth
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    itemId: '',
                    name: '',
                    flavorText: '',
                    weight: '',
                    value: '',
                    quantity: 1
                })

                this.props.toggleAll();
                this.props.fetchItems();
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Button color="danger" onClick={this.props.toggleNested}>Custom</Button>
                <Modal isOpen={this.props.isOpen} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Create Custom Item</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input name="name" type="text" onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Description</Label>
                                <Input name="flavorText" type="text" onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Weight</Label>
                                <Input name="weight" type="number" onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Value</Label>
                                <Input name="value" type="number" onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Quantity</Label>
                                <Input name="quantity" type="number" onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>Add Item</Button>{' '}
                        <Button color="success" onClick={this.props.toggleNested}>Search</Button>
                        <Button color="secondary" onClick={this.props.toggleAll}>Cancel Creation</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default props => (
    <AuthContext.Consumer>
        {auth => <CreateItemModal {...props} auth={auth} />}
    </AuthContext.Consumer>
)