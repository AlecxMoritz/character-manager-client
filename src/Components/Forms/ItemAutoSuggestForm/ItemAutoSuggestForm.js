import React from 'react';
import Autosuggest from 'react-autosuggest';

const theme = {
  input : {
    display: 'block',
    width: '100%',
    height: 'calc(1.5em + 0.75rem + 2px)',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  },

  suggestionsContainerOpen : {
    display: 'block',
    position: 'absolute',
    // paddingLeft : 10,
    top: 51,
    width: 280,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },

  suggestionsList : {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  suggestion : {
    cursor: 'pointer',
    padding: '10px 20px'
  },

  suggestionHighlighted : {
    backgroundColor: '#ddd'
  }
}

class ItemAutoSuggestionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: [],
      defaultItems : []
    };
  }

  componentDidMount = () => {
    this.fetchDefaultItems()
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
    .then(data => {
    })
    .catch(err => console.log(err));
}

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : this.state.defaultItems.filter(lang => {
      if(lang.name.toLowerCase().slice(0, inputLength) === inputValue | lang.name.toLowerCase().includes(inputValue)) {
        return lang
    }
      }
    );
  };

  getSuggestionValue = suggestion => suggestion.name;
  

  renderSuggestion = suggestion => (
    <div onClick={(e) => this.props.selectItem(suggestion)}>
      {suggestion.name}
    </div>
  );


  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: 'Search for an item',
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
    );
  }
}

export default ItemAutoSuggestionForm;