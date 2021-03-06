import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap'
import { AuthContext } from '../Auth/AuthContext';
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
                    <AuthContext.Provider value={props.token} >
                    <SiteBar clearToken={props.clearToken} />
                    <Container>

                    <Route exact path="/" component={HomeSplash}/>

                    {/* display routes */}
                    <Route path="/characters/" component={Characters} /> 

                    {/* create routes */}
                    <Route path="/create/character" component={CreateCharacter} />  

                    {/* edit routes */}
                    <Route path="/edit/character" component={EditCharacter} />  

                    {/* Detail routes */}
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
                    </AuthContext.Provider>
                </div>
            </Router>
        </div>
    )
}

export default AuthSplash;