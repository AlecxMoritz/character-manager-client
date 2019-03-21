import React from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import UserAllItemOverview from '../OverviewViews/UserAllItemOverview';

const linkStyles = {
    color : 'white',
    textDecoration : 'none'
}

class InventoryItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount() {
        this.fetchItems();
    }

    fetchItems = () => {
        fetch('http://localhost:4050/api/inv-items/', {
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
            console.log("Data =>", data)
        })
        .catch(err => console.log(err)); 
    }

    render() {
        const display = this.state.items.length > 0 ? (
            this.state.items.map((item, index) => {
                return <UserAllItemOverview key={index} item={item} />
            })
        ) : <p>No user created items yet.</p>
        return (
            <div>
                <Button>
                    <Link to="/create/item" style={linkStyles}>Create New</Link>
                </Button>
                { display }
            </div>
        )
    }
}

export default props => (
    <AuthContext.Consumer>
        { auth => <InventoryItems {...props} auth={auth} /> }
    </AuthContext.Consumer>
)