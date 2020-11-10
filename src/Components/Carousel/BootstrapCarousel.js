import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './img/img1';
import img2 from './img/img2';
import img3 from './img/img3';
import './Bootstrap.css'

export class BootstrapCarousel extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item style={{ 'height': "300px" }}>
                            <img style={{ 'height': "300px" }}
                                className="d-block w-100"
                                src={img1} />
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "300px" }} >
                            <img style={{ 'height': "300px" }}
                                className="d-block w-100"
                                src={img2} />
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "300px" }}>
                            <img style={{ 'height': "300px" }}
                                className="d-block w-100"
                                src={img3} />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default BootstrapCarousel


