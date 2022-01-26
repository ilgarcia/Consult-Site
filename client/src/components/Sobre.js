import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Sobre(props) {
    return (
        <div className="sobre pb-5">

            <div
                className="sobre-banner"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + "/assets/images/sobre-nos.jpg"
                    })`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <Container>
                    <Row className="d-flex flex-column justify-content-center">
                        <Col xs={8} className="px-4">
                            <h1 className="mb-5 banner-titulo">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit
                            </h1>
                            <p xs={8} className="banner-subtitulo">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Reiciendis facere laudantium
                                soluta corporis molestiae vel rem temporibus est
                                ea, sunt amet sint quam adipisci deleniti? Id
                                voluptates incidunt eveniet voluptatum.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className=" my-5 justify-content-center">
                        <Col xs={4} className="px-4 d-flex flex-column justify-content-center align-items-end text-end">
                            <h2 className="mb-5 title-color">Nossa Proposta</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ut dolore in amet. Qui magnam distinctio sapiente hic ad, quia labore, nesciunt eum modi eius quam repudiandae impedit nobis nostrum!</p>
                        </Col>
                        <Col xs={4} className="px-4 d-flex flex-column justify-content-center align-items-start text-start">
                            <h2 className="mb-5 title-color">Nosso Método</h2>
                            <p className=" text-align-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ut dolore in amet. Qui magnam distinctio sapiente hic ad, quia labore, nesciunt eum modi eius quam repudiandae impedit nobis nostrum!</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <h2 className="mb-4 title-color">Lorem ipsum</h2>
                    <Row className="mb-4 justify-content-center">
                        <Col xs={2} className="py-5 d-flex flex-column justify-content-center gray-session">imagem</Col>
                        <Col xs={8} className="py-5 d-flex flex-column justify-content-center gray-session">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi magnam ullam perspiciatis accusantium, tempore velit esse voluptatem porro adipisci blanditiis voluptatibus minima repellat sequi enim molestias consectetur, pariatur eveniet.</Col>

                    </Row>
                    <Row className="mb-4 justify-content-center">
                        <Col xs={8} className="py-5 px-3 d-flex flex-column justify-content-center gray-session">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, maxime rem. Fuga odio nemo laboriosam in exercitationem, quia laudantium nobis aliquid molestiae, consequatur mollitia repudiandae eligendi! Ex dolore exercitationem aspernatur.</Col>
                        <Col xs={2} className="py-5 px-3 d-flex flex-column justify-content-center gray-session">imagem</Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <h2 className="my-5 title-color">Lorem ipsum</h2>
                    <Row className="justify-content-center">
                        <Col xs={8} className="mb-5 font-strong"><strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quod in mollitia similique beatae tempore illum repellat dignissimos cupiditate ab minima quidem, sapiente, odit unde libero optio delectus animi dolorum.</strong></Col>
                    </Row>
                    <Row>
                        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptas consectetur ea perferendis nemo aperiam ab veritatis, inventore molestiae? Accusamus pariatur nihil molestiae asperiores, odio maiores saepe unde totam quaerat.</Col>
                        <Col>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae, eos dolores necessitatibus alias numquam veritatis praesentium! Natus dolore sint, unde, repellendus, quasi vero at aliquam voluptates cupiditate incidunt totam!</Col>
                    </Row>
                </Container>
            </div>

        </div>
    );
}
