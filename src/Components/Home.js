import React, { useEffect, useState } from 'react'

import { adoptableCats } from '../Api Handel/fetchHelper';
import { CatCard } from './CatCard';
import { Col, Container, Row } from 'react-bootstrap';

export const Home = () => {

    const [cats, setCats] = useState([]);

    useEffect(() => {
        !cats.length && fetchCats()
    }, [])

    const fetchCats = async () => {
        const data = await adoptableCats();
        setCats(data);
    }

    return (
        <Container className="bg-black roudned shadow-lg p-5 text-light text-center mt-4 mb-4">
            <div>
                <h1>Adopt a Cat</h1>
                <h4>Find cats in your area who are looking for a loving home.</h4>
                <p>This page displays the first 9 cats from the API.</p>
                <hr />
            </div>
            <Row>
                <Col className="d-flex gap-2 flex-wrap justify-content-around">
                    {cats.slice(0, 9).map((cat) => (
                        <CatCard key={cat.id} cats={cat} />
                    ))}
                </Col>

            </Row >
        </Container>

    )
}
