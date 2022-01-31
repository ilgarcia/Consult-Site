import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import { AuthContext } from "../contexts/auth";

export default function Navigation(props) {
  const { authenticated, loading, logoutUser } = useContext(AuthContext);

  if (loading) {
    // Alterar design
    return <div className="loading">Carregando...</div>;
  }

  const handleLogout = () => {
    logoutUser();
  };

  const authNavBar = () => {
    if (authenticated) {
      return (
        <Nav>
          <Nav.Link href="/contasadmin/">CONTAS (ADM)</Nav.Link>
          <Nav.Link href="/">COMECE A INVESTIR (ADM)</Nav.Link>
          <Nav.Link href="/">BLOG (ADM)</Nav.Link>
          <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
        </Nav>
      );
    }
  };

  return (
    <div className="nav">
      <div className="container">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
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
                <NavDropdown title="COMECE A INVESTIR" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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
              {authNavBar()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
