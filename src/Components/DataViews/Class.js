import React from 'react';

const divStyles = {
    backgroundColor: 'lightgray',
    margin: '1em',
    borderRadius: '5px',
    padding: '1em',
    cursor: 'pointer'
}

const Class = (props) => {
    
    let displayClass = props.charClass;

    return (
        <div onClick={(e) => props.handleSelect(displayClass.id, displayClass.name)} style={divStyles}>
            <h2>{ displayClass.name }</h2>
            <p>{ displayClass.description }</p>
            <ul>
                <li>Charisma: { displayClass.charisma }</li>
                <li>Constitution: { displayClass.constitution }</li>
                <li>Dexterity: { displayClass.dexterity }</li>
                <li>Strength: { displayClass.strength }</li>
                <li>Intelligence: { displayClass.intelligence }</li>
                <li>Wisdom: { displayClass.wisdom }</li>
            </ul>
        </div>
    )
}

export default Class;