import React from 'react';
import  Class from '../DataViews/Class';
import NewCharacterDetailsForm from '../Forms/NewCharacterDetailsForm';

import { Container, Col, Row, Button } from 'reactstrap';

class SelectClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectingClass : true,
            selectedId: 0,
            selectedName : 'No Class Selected'
        }
    }

    onSelect = (id, name) => {
        
        this.setState({
            selectedId : id,
            selectedName: name
        });
    };

    confirmClassChoice = () => {
        if(this.state.selectedId === 0) return;

        this.setState({
            selectingClass : false
        })
    }

    render() {
        const choices = this.props.charClasses.map((classData, index) => {
            return <Class key={index} handleSelect={this.onSelect} charClass={classData}/>
        })
        
        const display = this.state.selectingClass ? (
            <Container>
                <Row>
                    <Col xs="8">
                        <h2>Choose a Base Class</h2>
                        <p>Or the closest fit. You can update the values, description, and name later.</p>
                    </Col>
                    <Col xs="2">
                        <h4>Current Choice</h4>
                        <h6>{ this.state.selectedName }</h6>
                    </Col>
                    <Col>
                        <Button onClick={this.confirmClassChoice}>Next</Button>
                    </Col>
                </Row>
                { choices }
            </Container>
        ) : (
            <div>
                <NewCharacterDetailsForm selectedClass={this.props.charClasses.filter(dataSet => dataSet.id === this.state.selectedId)} />
            </div>

        )





        return (
            <div>
                { display }
            </div>
            // <Container>
            //     <Row>
            //         <Col xs="8">
            //             <h2>Choose a Base Class</h2>
            //             <p>Or the closest fit. You can update the values, description, and name later.</p>
            //         </Col>
            //         <Col xs="2">
            //             <h4>Current Choice</h4>
            //             <h6>{ this.state.selectedName }</h6>
            //         </Col>
            //         <Col>
            //             <Button>Next</Button>
            //         </Col>
            //     </Row>
            //     { choices }
            // </Container>
        )
    }
}

export default SelectClass;