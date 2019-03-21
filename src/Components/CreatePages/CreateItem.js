import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { AuthContext } from '../Auth/AuthContext';
import SelectItem from '../Selects/SelectItem';
import NewItemForm from '../Forms/NewItemForm';

const buttonStyles = {
    color : 'white',
    textDecoration : 'none'
}

class CreateItem extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultItems : [],
            selectedItem : 0
        }
    } 

    componentDidMount = () => {
        this.fetchDefaultItems();
    }

    fetchDefaultItems = () => {
        fetch('http://localhost:4050/api/data/items/', {
            method : 'GET',
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                defaultItems : data
            })
        })
        .catch(err => console.log(err));
    }

    selectItem = (id) => {
        
        this.setState({
            selectedItem : id
        }, console.log("Set ID =>", id));
    }
    
    render() {
        const selectedItem = this.state.defaultItems.filter(item => item.id === this.state.selectedItem);

        const formDisplay = this.state.selectedItem !== 0 ? <NewItemForm item={selectedItem} /> : <div></div>

        const displaySelect = this.state.defaultItems.length > 0 ? (
            <SelectItem items={this.state.defaultItems} onSelect={this.selectItem} />
        ) : <div></div>
        return (
            <Container>
                <Row>
                    { displaySelect }
                </Row>
                <Row>
                    <Col xs="8">
                        { formDisplay }
                    </Col>
                    {/* <Col xs="2">
                        <Button color="primary" style={buttonStyles}>Save</Button>
                    </Col> */}
                </Row>
            </Container>
        )
    }

}

export default props => (
    <AuthContext.Consumer>
        { auth => <CreateItem {...props} auth={auth} /> }
    </AuthContext.Consumer>
)