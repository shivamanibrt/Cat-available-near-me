import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { CatSearch } from './CatSearch';
import { adoptableCats } from '../Api Handel/fetchHelper';

export const Home = () => {

    const [searchedCat, setSearchedCat] = useState({});
    const [cats, setCats] = useState([]);
    const [error, setError] = useState(false);


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setSearchedCat({
            ...searchedCat,
            [name]: value,
        });

    };


    const handleOnSubmit = async (e) => {
        e.preventDefault();
        error && setError(false);


        const { searchTerm, location } = searchedCat;
        const data = await adoptableCats(searchTerm, location);

        setCats(data);

        if (data.Response === 'True') {
            setCats(data)
        }
        else {
            setError(true);
        }
        console.log(cats)
    };

    return (
        <div className=" bg-black p-5 rounded shadow-lg p-4 text-light text-center">
            <Form onSubmit={handleOnSubmit} className='wrapper'>
                <div >
                    <h1>Cats Adoption</h1>
                    <h4>Find cats for adoption in your area.</h4>
                    <hr />
                </div>
                <Row className="gap-1">
                    <Col md="5">
                        <Form.Control
                            type="text"
                            placeholder="Search for cats breed"
                            name='searchTerm'
                            onChange={handleOnChange}
                        />
                    </Col>
                    <Col md="5">
                        <Form.Control
                            type="text"
                            placeholder="Location"
                            name='location'
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
            <div className="d-flex justify-content-center mt-5">
                {/* {error && <Alert variant="danger">Movie not found!</Alert>} */}
                {cats.id && cats.map((cat) => (
                    <CatSearch key={cat.id} cats={cat} />
                ))}
            </div>

        </div >
    )
};
