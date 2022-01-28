import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contato(props) {
    return (
        <div className="Contato">
            <div
                className="p-5 d-flex flex-column justify-content-center"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/assets/images/contato-banner.jpg"
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <h1 className="m-4 banner-titulo text-white">
                        ENTRE EM CONTATO CONOSCO
                    </h1>
                    <p className="banner-subtitulo text-white">
                        Tire todas as suas dúvidas ou envie suas sugestões para
                        nossa equipe.
                    </p>
                </Container>
            </div>
            <div>
                <Container>
                    <h2 className="m-5">Formulário de mensagens online</h2>

                    <Form className="mb-5">
                        <Row className="m-4 d-flex justify-content-center align-items-center">
                            <Col xs={3}>
                                <Form.Label>
                                    Nome <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control type="text" />
                            </Col>
                            <Col xs={3}>
                                <Form.Label>
                                    Email <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                />
                            </Col>
                            <Col xs={3}>
                                <Form.Label>
                                    Telefone{" "}
                                    <span className="text-danger">*</span>
                                </Form.Label>
                                <Form.Control type="text" />
                            </Col>
                        </Row>
                        <Row className="m-4 d-flex justify-content-center align-items-center">
                            <Col xs={9}>
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={7} />
                            </Col>
                        </Row>
                        <Row className="m-4 d-flex justify-content-center align-items-center">
                            <Col xs={9}>Captcha</Col>
                        </Row>
                        <Row className="m-4 d-flex justify-content-center align-items-center">
                            <Col xs={9}>
                                <Button variant="primary" type="submit">
                                    ENVIAR
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </div>
    );
}
