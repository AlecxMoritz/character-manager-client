import React from 'react';
import { AuthContext } from '../Auth/AuthContext';
import UserAllItemOverview from '../OverviewViews/UserAllItemOverview';
import CreateItemModal from '../CreatePages/CreateItemModal';
import { Container, Row } from 'reactstrap';

class InventoryItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characterId : this.props.characterId,
            items : []
        }
    }

    componentDidMount() {
        // this.setState({
        //     characterId : this.props.characterId
        // });

        this.fetchItems();
    }

    fetchItems = () => {
        fetch(`http://localhost:4050/api/inv-items/${this.state.characterId}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : this.props.auth
            }
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                items : data
            });
        })
        .catch(err => console.log(err)); 
    }

    render() {
        const display = this.state.items.length > 0 ? (
            this.state.items.map((item, index) => {
                return <UserAllItemOverview fetchItems={this.fetchItems} characterId={this.state.characterId} key={index} item={item} />
            })
        ) : <p>No user created items yet.</p>
        return (
            <Container>
                <h1>Inventory Items</h1>
                <hr />
                <CreateItemModal characterId={this.state.characterId} fetchItems={this.fetchItems}/>
                <Row>
                    { display }
                </Row>
            </Container>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        { auth => <InventoryItems {...props} auth={auth} /> }
    </AuthContext.Consumer>
)