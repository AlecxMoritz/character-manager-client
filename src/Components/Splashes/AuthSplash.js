import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// reactstrap
import { Button } from 'reactstrap';

// component imports
//#region 
import SiteBar from '../UI/Navbar';
import CreateCharacter from '../CreatePages/CreateCharacter';
import EditCharacter from '../EditPages/EditCharacter';
import Characters from '../DisplayPages/Characters';
import CharacterDetail from '../DetailViews/CharacterDetail';
//#endregion

// component 

const AuthSplash = (props) => {
    return (
        <div>
        {/* router */}
        <Router>
        <div>

        <SiteBar clearToken={props.clearToken} />

        {/* display routes */}
        <Route path="/characters/" component={Characters} /> 

        {/* create routes */}
        <Route path="/create/character" component={CreateCharacter} />  
        {/* <Route path="/" exact component={} />

        {/* edit routes */}
        <Route path="/edit/character" component={EditCharacter} />  

        <Route path="/character/" component={CharacterDetail} />
        {/* <Router path="/items/" component={} /> 
        <Router path="/spells/" component={} /> 
        <Router path="/weapons/" component={} /> 
        <Router path="/account/" component={} />
        
          
        <Router path="/create/item" component={} />  
        <Router path="/create/spell" component={} />  
        <Router path="/create/weapon" component={} />  

        */}

        </div>
        </Router>
        </div>
    )
}

// Nav
// <Route path="/" exact component={Index} />
        // <Route path="/about/" component={About} />
        // <Route path="/users/" component={Users} />
  // </Router>

export default AuthSplash;