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
    console.log(cats)
    return (
        <Container className="bg-black roudned shadow-lg p-5 text-light text-center mt-4 mb-4">
            <div >
                <h1>Cats Adoption</h1>
                <h4>Find cats for adoption in your area.</h4>
                <h3>This page contains 9 colleciton of cats</h3>
                <hr />
            </div>
            <Row>
                <Col className="d-flex gap-2 flex-wrap justify-content-around">
                    {cats.map((cat) => (
                        <CatCard key={cat.id} cats={cat} />
                    ))}
                </Col>
            </Row >
        </Container>

    )
}
