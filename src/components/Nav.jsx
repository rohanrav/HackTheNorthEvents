import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarD(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Link to="/">
        <Navbar.Brand>
            <img
                alt=""
                src={process.env.PUBLIC_URL + "/logo.svg"}
                width="30"
                height="30"
                className="d-inline-block align-top"
                style={{marginRight: '10px'}}
            />{' '}
            <strong style={{fontWeight: 600}}>Hack The North</strong>
            </Navbar.Brand>
        </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Link to="/login">
                {!props.loggedIn ? <Nav><Button variant="primary">Log In</Button></Nav> : <Nav><Button variant="outline-secondary" disabled>Logged In</Button></Nav>}
            </Link>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarD;