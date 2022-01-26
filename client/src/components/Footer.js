import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Footer(props) {
    return (

        // https://icons.getbootstrap.com/#usage

        <footer className="footer text-white">
            <Container className="p-4">
                {/* Social Media */}
                <section className="mb-4">
                    <a
                        class="btn btn-floating social-button m-1"
                        href="#!"
                        role="button"
                    >
                        <i
                            class="bi-facebook"
                            role="img"
                            aria-label="Facebook"
                        ></i>
                    </a>
                    <a
                        class="btn btn-floating social-button m-1"
                        href="#!"
                        role="button"
                    >
                        <i
                            class="bi-instagram"
                            role="img"
                            aria-label="Instagram"
                        ></i>
                    </a>
                    <a
                        class="btn btn-floating social-button m-1"
                        href="#!"
                        role="button"
                    >
                        <i
                            class="bi-linkedin"
                            role="img"
                            aria-label="Linkedin"
                        ></i>
                    </a>
                    <a
                        class="btn btn-floating social-button m-1"
                        href="#!"
                        role="button"
                    >
                        <i
                            class="bi-youtube"
                            role="img"
                            aria-label="Youtube"
                        ></i>
                    </a>
                </section>

                {/* Form */}

                <section className="mb-5">
                    <Form>
                        <Row className="d-flex justify-content-center align-items-center">
                            <Col xs="auto" className="font-strong">
                                <Form.Label>
                                    Assine a nossa newsletter
                                </Form.Label>
                            </Col>
                            <Col xs={3}>
                                {" "}
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Col>
                            <Col xs="auto">
                                {" "}
                                <Button variant="primary" type="submit">
                                    Subscribe
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </section>

                {/* Text + Links */}
                <section className="mb-4">
                    <Row className="d-flex align-items-center">
                        <Col>
                            <p className="mb-0">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Rerum ipsa unde nesciunt
                                laudantium labore vitae modi. Quae dolorem quos
                                recusandae vero similique ad cumque, reiciendis
                                architecto est expedita obcaecati amet.
                            </p>
                        </Col>
                        <Col>
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 1
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 2
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 3
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" class="text-white">
                                        Link 4
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </section>
            </Container>
            {/* Copyright */}
            <div
                class="text-center p-3 copyright"
            >
                © 2020 Copyright: {" "}
                <a class="text-white" href="https://mdbootstrap.com/">
                     MDBootstrap.com
                </a>
            </div>
        </footer>
    );
}
