import React from 'react';

class NewCharacterDetailsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name : this.props.selectedClass[0].name,
            class : this.props.selectedClass[0].class,
            description : this.props.selectedClass[0].description,
            bio : this.props.selectedClass[0].bio,
            charisma : this.props.selectedClass[0].charisma,
            constitution : this.props.selectedClass[0].constitution,
            dexterity : this.props.selectedClass[0].dexterity,
            intelligence : this.props.selectedClass[0].intelligence,
            strength : this.props.selectedClass[0].strength,
            wisdom : this.props.selectedClass[0].wisdom,
        }
    }

    componentDidMount() {
        console.log(this.state);
    }

    render() {
        return (
            <div>i am here</div>
        )
    }
}

export default NewCharacterDetailsForm;