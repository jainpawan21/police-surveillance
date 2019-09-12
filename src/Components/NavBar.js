import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap'; 
import { NavLink } from 'react-router-dom';


class NavBar extends Component{
    state = {
        isNavOpen : false,

    };

  toggleNav = () => {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }
  render() {
      return(
          <React.Fragment>
            <Navbar className="navbar-light shadow" sticky={'top'} style={{backgroundColor: "#ffffff"}} expand="sm">
              <div className="container">
                
                <NavbarBrand className="mr-auto" href="/">
                    POLICE SURVEILLANCE
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} className="mr-2" style={{outline: 'none'}}/>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem className="ml-auto mr-auto" >
                        <NavLink className="nav-link" to="/">
                          All Cases
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto mr-auto" >
                        <NavLink className="nav-link" to="/add">
                          Add
                        </NavLink>
                    </NavItem>
                    <NavItem className="ml-auto mr-auto">
                        <NavLink className="nav-link" to="/status">
                          Check Status
                        </NavLink>
                    </NavItem>
                    
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
             
          </React.Fragment>
      );
  }
}
export default NavBar;