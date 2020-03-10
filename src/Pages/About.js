import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Container, Tab, Nav, Row, Col} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav className="flex-column mt-2" variant="pills" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="forth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3" >
                                <Tab.Pane eventKey="first" >
                                    <img src="https://lh3.googleusercontent.com/proxy/lNfODakbc8LYD9auOde5mIAg-BjsuxvWNBHOqWA3yIBM0kv6m0DDxFapXa3jBZpQzYe5ZX0zFsIVoYjqVm9oHpViMojVzBbXeZBTWtLcynIE5z2ZZUqqC6B229Q" className="img-fluid"/>
                                    <p>Lorem ipsum dolor sit amet, con.sectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" >
                                    <img src="https://serfcompany.com/wp-content/uploads/2017/03/PHP.png"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" >
                                    <img src="https://www.character.org/wp-content/uploads/2019/01/Digital-Citizenship.jpg" className="img-fluid"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="forth">
                                    <img src="https://kalpeshkathane.files.wordpress.com/2016/08/framework.png?w=500"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" >
                                    <img src="https://blog.templatetoaster.com/wp-content/uploads/2018/09/Best-PHP-Frameworks.jpg"/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;