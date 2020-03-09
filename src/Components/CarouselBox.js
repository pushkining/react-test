import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import prirodaImg from "../assets/priroda.jpg";
import zemlyaImg from "../assets/zemlja-1.jpg";
import boomImg from "../assets/bolshoj-vzryv.jpg";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={prirodaImg} />
                    <Carousel.Caption>
                        <h3>Nature is beatuful</h3>
                        <p> Lorem ipsum dolor setap </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={zemlyaImg} />
                    <Carousel.Caption>
                        <h3>Nature is beatuful</h3>
                        <p> Lorem ipsum dolor setap </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={boomImg} />
                    <Carousel.Caption>
                        <h3>Nature is beatuful</h3>
                        <p> Lorem ipsum dolor setap </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}

export default CarouselBox;