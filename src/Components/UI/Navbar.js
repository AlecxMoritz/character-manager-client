import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

const styles = {
    cursor: 'pointer'
}

class SiteNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleLogout = () => {
        this.props.clearToken();
        return <Redirect to={{
            pathname: '/'
        }}/>
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">RP.ME</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={styles} onClick={this.props.clearToken}>Logout</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>Create New</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Manage
                  </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <Link to="/characters/">Characters</Link>
                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/items/">Items</Link>
                    </DropdownItem>
                                    <DropdownItem>
                                        Spells
                    </DropdownItem>
                                    <DropdownItem>
                                        Weapons
                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Account
                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default SiteNavbar