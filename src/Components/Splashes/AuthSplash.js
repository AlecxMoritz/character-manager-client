import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap'

//#region 
import SiteBar from '../UI/Navbar';
import HomeSplash from '../Splashes/HomeSplash';
import CreateCharacter from '../CreatePages/CreateCharacter';
import EditCharacter from '../EditPages/EditCharacter';
import Characters from '../DisplayPages/Characters';
import CharacterDetail from '../DetailViews/CharacterDetail';
//#endregion

// component 

const AuthSplash = (props) => {
    return (
        <div>
            <Router>
                <div>
                    <SiteBar clearToken={props.clearToken} />
                    <Container>
                    {/* display routes */}

                    <Route exact path="/" component={HomeSplash}/>

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
                    </Container>
                </div>
            </Router>
        </div>
    )
}

export default AuthSplash;