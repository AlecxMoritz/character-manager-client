import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormText } from 'reactstrap';
import ItemAutoSuggestionForm from '../Forms/ItemAutoSuggestForm/ItemAutoSuggestForm';
import CreateCustomItemModal from './CreateCustomItemModal';
import { AuthContext } from '../Auth/AuthContext';

class CreateItemModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal : false,
            characterId: this.props.characterId,
            itemId: '',
            name: '',
            flavorText: '',
            weight: '',
            value: '',
            quantity: 1
        };

        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleNested() {
        console.log('toggling nested')
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false
        });
      }
    
      toggleAll() {
        this.setState({
          nestedModal: !this.state.nestedModal,
          modal: !this.state.modal
        });
      }

    selectItem = async (item) => {
        await this.setState({
            itemId: item.id,
            name: item.name,
            flavorText: item.flavorText,
            weight: item.weight,
            value: item.value
        });
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
                    quantity: 1,
                    toggleNested : false
                })

                this.toggle();
                this.props.fetchItems();
            })
            .catch(err => console.log(err));
    }


    render() {
        let quantityDisplay = this.state.itemId === '' ? null : (
            <div>
                <Input value={this.state.quantity} name="quantity" onChange={(e) => this.handleChange(e)} />
                <FormText>How many do you have?</FormText>
            </div>
        )

        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add item to CharacterID : {this.state.characterId}</ModalHeader>
                    <ModalBody>
                        <ItemAutoSuggestionForm selectItem={this.selectItem} />
                        <br />
                        <h3>{this.state.name}</h3>
                        <p>{this.state.flavorText}</p>
                        {quantityDisplay}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.onSubmit}>Add Item</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        <CreateCustomItemModal characterId={this.state.characterId} fetchItems={this.props.fetchItems} toggleAll={this.toggleAll} isOpen={this.state.nestedModal} toggleNested={this.toggleNested} />
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