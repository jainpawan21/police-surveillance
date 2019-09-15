import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap'; 
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

  logout = (e) => {
    alert('Logging Out')
    localStorage.clear();
    window.location.pathname = "/login"
  }
  render() {
      return(
          <React.Fragment>
            <Navbar className="navbar-light shadow" sticky={'top'} style={{backgroundColor: "#ffffff"}} expand="sm">
              <div className="container">
                
                <NavbarBrand className="mr-auto" href="/">
                <video src={require('../Constants/police-light-2.mp4')} type="application/mp4" height="50px" autoPlay loop/>&emsp;&emsp;&emsp; &emsp;&emsp;&emsp; <b>POLICE SURVIELLANCE</b>
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
                    {localStorage.getItem('token') !== undefined ? <NavItem className="ml-auto mr-auto">
                        <Button  onClick={(e) => this.logout(e)}>LogOut</Button>
                       
                    </NavItem>: null}
                  </Nav>
                </Collapse>
              </div>
            </Navbar>
             
          </React.Fragment>
      );
  }
}
export default NavBar;