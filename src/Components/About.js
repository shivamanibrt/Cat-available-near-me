import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import catsImg from '../Assets/catsSpeeling.jpg';
import '.././App.css';

export const About = () => {
    return (
        <Container>
            <Row className="bg-dark rounded shadow-lg p-5 text-light mt-4 mb-4">
                <Col md={6}>
                    <Image src={catsImg} roundedCircle fluid className="cat-image" />
                </Col>
                <Col md={6}>
                    <h2 className="text-center">About Our Cat Collection</h2>
                    <p>
                        Welcome to our cat collection! We are passionate about cats and dedicated to providing you with the
                        most adorable and fascinating cats from around the world. Our collection features a wide variety of breeds
                        and cat images that will surely bring a smile to your face.
                    </p>
                    <p>
                        We believe that cats bring joy and happiness to people's lives, and our mission is to share that joy with you.
                        Whether you're a cat lover or simply appreciate the beauty and grace of these majestic creatures, you'll find
                        something to love in our cat collection.
                    </p>
                    <p>
                        To provide you with the best cat content, we leverage the Cat API from
                        <a href="https://thecatapi.com/" target="_blank" rel="noopener noreferrer" className='text-warning'> https://thecatapi.com/</a> which allows us to access a vast database
                        of cat images and information. Through this API, we can showcase a diverse range of cats, including different
                        breeds, name, origin, grooming, health issue and many more . Every time you visit our site, you'll discover something new and captivating.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

