import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

function NavbarD() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
        <Navbar.Brand href="#home">
            <img
                alt=""
                src={process.env.PUBLIC_URL + "/logo.svg"}
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            <strong style={{fontWeight: 500}}>Hack The North</strong>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#features">Events</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="outline-dark">Log In</Button>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarD;