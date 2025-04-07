import { Navbar, Nav, Container } from 'react-bootstrap';
import "../assets/styles/header.css";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Logo from '../assets/images/logo.png';


const Header = () => {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/" className="nav-link">
            <img src={Logo} alt="Church Name Logo" className="header_logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link to="/" className="header-color">
                Home
              </Nav.Link>
              <Nav.Link to="/about">About</Nav.Link>
              <Nav.Link to="/login">
                <FaUser className="nav-icon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header