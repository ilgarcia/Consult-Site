import React from "react";

import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home(props) {
    return (
        <div className="page">
            <div
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/assets/images/banner-background.png"
                    })`,
                }}
            >
                <Container>
                    <Row>
                        <Col>
                            {" "}
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/pessoa.png"
                                }
                                alt="pessoa"
                            />
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-start">
                            <h1 className="banner-titulo text-white text-start">
                                A SUA ACESSÓRIA DE INVESTIMENTOS
                            </h1>
                            <p className="banner-subtitulo text-white">
                                Ajudando as pessoas a investirem melhor.
                            </p>
                            <Button
                                className="banner-button"
                                variant="outline-light"
                            >
                                QUERO SER UM{" "}
                                <span className="protagonistas">
                                    PROTAGONISTA$
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="mb-5">
                <Container>
                    <h2 className="my-5">
                        A <span className="title-color">consultoria</span>{" "}
                        personalizada para você
                    </h2>
                    <Row>
                        <Col className="mt-4 px-5">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/001-personalizada.png"
                                }
                                alt=""
                            />
                            <h3 className="my-4 title-color">Lorem Ipsum</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel consectetur explicabo
                                dolores porro accusantium nemo facere dicta
                                labore aliquam voluptatem praesentium soluta
                                earum atque, nisi delectus repudiandae at ipsam
                                neque.
                            </p>
                        </Col>
                        <Col className="mt-4 px-5">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/002-personalizada.png"
                                }
                                alt=""
                            />
                            <h3 className="my-4 title-color">Lorem Ipsum</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel consectetur explicabo
                                dolores porro accusantium nemo facere dicta
                                labore aliquam voluptatem praesentium soluta
                                earum atque, nisi delectus repudiandae at ipsam
                                neque.
                            </p>
                        </Col>
                        <Col className="mt-4 px-5">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/003-personalizada.png"
                                }
                                alt=""
                            />
                            <h3 className="my-4 title-color">Lorem Ipsum</h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Vel consectetur explicabo
                                dolores porro accusantium nemo facere dicta
                                labore aliquam voluptatem praesentium soluta
                                earum atque, nisi delectus repudiandae at ipsam
                                neque.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="gray-session pt-1">
                <Container>
                    <h2 className="my-5">Quaerat amet quia tempore asect</h2>
                    <Row>
                        <Col className="d-flex flex-column justify-content-center">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Provident dolor consequuntur
                                neque quas vel, culpa nihil molestiae obcaecati
                                fuga! Voluptate quos dolorem, deserunt laborum
                                minus cum provident! Voluptates, eveniet dicta.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet provident deleniti alias
                                esse ab? Nemo, explicabo? Eaque quod, magnam
                                inventore et iure impedit molestias aliquid,
                                dicta sit, quidem enim id.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime asperiores consequatur,
                                beatae illum dolor doloremque ipsa sint
                                distinctio. Doloremque, repellendus! Possimus
                                incidunt delectus tenetur impedit eius
                                obcaecati, quod fugiat doloremque.
                            </p>
                        </Col>
                        <Col>
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/CyrpiyAAVCg"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="mx-3 px-0 box-shadow">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="my-3">
                                        Light Card Title
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Ducimus nesciunt,
                                        velit placeat explicabo inventore culpa
                                        ullam corporis minus, molestias,
                                        mollitia deleniti debitis cupiditate
                                        assumenda ab sunt aspernatur dolores
                                        distinctio vel.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mx-3 px-0 box-shadow">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="my-3">
                                        Light Card Title
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Ducimus nesciunt,
                                        velit placeat explicabo inventore culpa
                                        ullam corporis minus, molestias,
                                        mollitia deleniti debitis cupiditate
                                        assumenda ab sunt aspernatur dolores
                                        distinctio vel.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mx-3 px-0 box-shadow">
                            <Card>
                                <Card.Body>
                                    <Card.Title className="my-3">
                                        Light Card Title
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Ducimus nesciunt,
                                        velit placeat explicabo inventore culpa
                                        ullam corporis minus, molestias,
                                        mollitia deleniti debitis cupiditate
                                        assumenda ab sunt aspernatur dolores
                                        distinctio vel.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <h2 className="mt-5 title-color">Depoimentos</h2>
                    <h3 className="mb-5">
                        Conheça as pessoas que escolheram os{" "}
                        <span className="protagonistas">Protagonista$</span>
                    </h3>
                    <Row xs={4} className="mb-4 justify-content-center">
                        <Col className="px-5 d-flex flex-column">
                            <p className="aspas-1">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/001-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio saepe odio ipsa corrupti
                                quae, repellat officia id nulla aliquid
                                blanditiis ratione. Ab, amet distinctio
                                excepturi alias repudiandae nostrum odio qui.
                            </p>
                            <p className="title-color nome-dep">Nome da pessoa</p>
                            <p className="aspas-2">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/002-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                        </Col>
                        <Col className="px-5 d-flex flex-column">
                            <p className="aspas-1">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/001-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio saepe odio ipsa corrupti
                                quae, repellat officia id nulla aliquid
                                blanditiis ratione. Ab, amet distinctio
                                excepturi alias repudiandae nostrum odio qui.
                            </p>
                            <p className="title-color nome-dep">Nome da pessoa</p>
                            <p className="aspas-2">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/002-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                        </Col>
                    </Row>
                    <Row xs={4} className="mb-4 justify-content-center">
                        <Col className="px-5 d-flex flex-column">
                            <p className="aspas-1">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/001-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio saepe odio ipsa corrupti
                                quae, repellat officia id nulla aliquid
                                blanditiis ratione. Ab, amet distinctio
                                excepturi alias repudiandae nostrum odio qui.
                            </p>
                            <p className="title-color nome-dep">Nome da pessoa</p>
                            <p className="aspas-2">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/002-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                        </Col>
                        <Col className="px-5 d-flex flex-column">
                            <p className="aspas-1">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/001-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Optio saepe odio ipsa corrupti
                                quae, repellat officia id nulla aliquid
                                blanditiis ratione. Ab, amet distinctio
                                excepturi alias repudiandae nostrum odio qui.
                            </p>
                            <p className="title-color nome-dep">Nome da pessoa</p>
                            <p className="aspas-2">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/images/002-aspas.png"
                                    }
                                    alt=""
                                />
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="agendar-session">
                <Container>
                    <h2 className="mt-5">Agende uma conversa</h2>
                </Container>
            </div>
            <div>
                <Container>
                    <h2 className="mt-5">Ultimos posts</h2>
                </Container>
            </div>
            <div className="m-5">so pra dar um espaço</div>
        </div>
    );
}
