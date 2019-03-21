import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleClick = () => {
    const reqUrl = `http://localhost:4050/api/${this.props.type}s/${this.props.id}`
    
    fetch(reqUrl, {
        method: 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : this.props.auth
        }
    })
    .then(response => response.json())
    .then(data => window.location.href = `/${this.props.type}s`)
    .catch(err => console.log(err))
    
    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Delete</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete {this.props.name}</ModalHeader>
          <ModalBody>
            Are you sure you want to delete this {this.props.type}? You will not be able to get this {this.props.name} back.
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.handleClick}>Delete</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default props => (
    <AuthContext.Consumer>
        { auth => <DeleteButton {...props} auth={auth } /> }
    </AuthContext.Consumer>
)