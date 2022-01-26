import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Navigation(props) {
    return (
        <div className="nav">
            <div className="container">
                <Navbar expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={process.env.PUBLIC_URL + '/assets/images/logo.svg'}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/sobre-nos/">SOBRE NÓS</Nav.Link>
                                <NavDropdown
                                    title="COMECE A INVESTIR"
                                    id="basic-nav-dropdown"
                                > 
                                    <NavDropdown.Item href="#action/3.1">
                                        Action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">
                                        Something
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">
                                        Separated link
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="/blog/">BLOG</Nav.Link>
                                <Nav.Link href="/contato/">ENTRE EM CONTATO</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}
