import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// , Row, Col, Form, Button

export default function LoginAdmin(props) {
    return (
        <div className="p-5 login">
            <Container >
                <div className="d-flex justify-content-center align-items-center">
                    <Card className="p-4 card-login box-shadow">
                        <h1 className="pt-4 pb-4">Login</h1>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control
                                        className="mb-3"
                                        type="text"
                                        placeholder="login"
                                    />
                                    <Form.Control
                                        className="mb-1"
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <Form.Check
                                        className="mb-4"
                                        type="checkbox"
                                        label="Check me out"
                                    />
                                    <Button variant="primary" type="submit">
                                        Submit
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
