import React, {Component} from 'react';
import CarouselBox from "../Components/CarouselBox";
import {Button, Card, CardDeck, Container} from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our team</h2>
                <CardDeck className="m-4">
                    <Card border={"success"} >
                        <Card.Img variant="top" src="https://images.pexels.com/photos/1990/man-person-people-emotions.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Card.Body>
                        <Card.Title>Developers</Card.Title>
                        <Card.Text>
                            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button variant="primary">About team</Button>
                    </Card.Body>
                    </Card>
                    <Card border={"success"}>
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                        <Card.Img variant="bottom" src="https://images.pexels.com/photos/2970499/pexels-photo-2970499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Card>
                    <Card border={"success"}>
                        <Card.Img variant="top" src="https://images.pexels.com/photos/3760044/pexels-photo-3760044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </Card.Text>
                            <Button variant="primary">About team</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        );
    }
}

