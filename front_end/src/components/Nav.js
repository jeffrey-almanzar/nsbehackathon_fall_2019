import React from "react";
import logo from "../assets/logo.png";
import { Link, Redirect } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  //DropdownItem
} from "reactstrap";

class NavigationComponent extends React.Component {
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
  render() {
    return (
      <div>
        <Navbar fixed="top" color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#about">About</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/search">
                  <span className="nav-link">Search Assistance</span>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/#join">Join Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#our-team">Our Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">Donate!</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/#contact">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationComponent;
