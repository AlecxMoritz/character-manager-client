import React from 'react';
import {
    Input,
    Container,
    Row
} from 'reactstrap';

class SelectItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            items : this.props.items,
            displayItems: [],
            search : ''
        };
        
    }

    

    handleChange = (event) => {
        this.setState({
            search : event.target.value
        }, this.filterItems())
    }

    filterItems = () => {
        if(this.state.search.length > 1) {
            this.setState({
                displayItems : this.state.items.filter(item => item.name.toLowerCase().includes(this.state.search.toLowerCase()))
            })
        }
    }

    

    render() {
        const searchItemDisplay = this.state.displayItems.length > 0 ? (
            <div>
                {this.state.displayItems.map((item, index) => {
                    return (
                        <div key={index} onClick={(e) => this.props.onSelect(item.id)}>
                            <h2>{item.name}</h2>
                        </div>
                    )
                })}
            </div>
        ) : <div></div>;

        return (
            <Container>
                <Input name="search" type="text" value={this.state.search} onChange={(e) => this.handleChange(e)} />
                <Row>
                    { searchItemDisplay }
                </Row>
            </Container>
            );
    }
}


export default SelectItem;