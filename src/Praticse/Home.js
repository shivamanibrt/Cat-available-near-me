import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAdoptableCats } from '../Praticse/CatApi';

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [location, setLocation] = useState('');
    const history = useHistory();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        if (name === 'searchTerm') {
            setSearchTerm(value);
        } else if (name === 'location') {
            setLocation(value);
        }
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        history.push(`/cat-search?searchTerm=${searchTerm}&location=${location}`);
    };
    return (
        <div className=" bg-black p-5 rounded shadow-lg p-4 text-light text-center">
            <Form onSubmit={handleOnSubmit}>
                <div>
                    <h1>Cats Adoption</h1>
                    <p>Find cats for adoption in your area.</p>
                    <hr />
                </div>
                <Row className="gap-1">
                    <Col md="5">
                        <Form.Control
                            type="text"
                            placeholder="Search for cats breed"
                            name="searchTerm"
                            value={searchTerm}
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col md="5">
                        <Form.Control
                            type="text"
                            placeholder="Location"
                            name="location"
                            value={location}
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col>
                        <div className="d-grid">
                            <Button variant="danger" type="submit">
                                Search Cats
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
