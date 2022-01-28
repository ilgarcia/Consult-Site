import React, { useState, useContext } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

import { AuthContext } from "../contexts/auth";

export default function LoginAdmin(props) {
    const {authenticated, loginUser} = useContext(AuthContext);

    const [login, setLogin] =useState("")
    const [password, setPassword] =useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit", {login, password});
        loginUser(login, password)
    };

    return (
        <div className="p-5 login d-flex align-items-center">
            <Container>
                <div className="d-flex justify-content-center">
                    <Card className="p-4 card-login box-shadow">
                        <h1 className="pt-4 pb-4">Login</h1>
                        <p>{String(authenticated)}</p>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        placeholder="login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                    />
                                    <Form.Control
                                        className="mb-1"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <Form.Check
                                        className="mb-4"
                                        type="checkbox"
                                        label="Check me out"
                                    />
                                    <Button variant="primary" type="submit">
                                        Entrar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </div>
            </Container>
        </div>
    );
}