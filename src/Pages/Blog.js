import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Card, Col, Container, ListGroup, Media, Row} from "react-bootstrap";

class Blog extends Component {
    render() {
        return (
            //
            <Container>
                <Row>
                    <Col md={9}>

                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/1781/brand.gif?itok=iqZZjVCY" />
                            <Media.Body>
                                <h5>Php blog</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/1781/brand.gif?itok=iqZZjVCY" />
                            <Media.Body>
                                <h5>Php blog</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/1781/brand.gif?itok=iqZZjVCY" />
                            <Media.Body>
                                <h5>Php blog</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img width={150} height={150} className="mr-3" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0015/1781/brand.gif?itok=iqZZjVCY" />
                            <Media.Body>
                                <h5>Php blog</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>PHP</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>HTML/CSS</ListGroup.Item>
                                <ListGroup.Item>SQL</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Blog;