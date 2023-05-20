import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { CatCard } from './CatCard';
import { adoptableCats } from '../Api Handel/fetchHelper';

export const SearchPage = () => {
    const [cats, setCats] = useState([]);


    useEffect(() => {
        !cats.length && fetchCats()
    }, [])


    const fetchCats = async () => {
        const data = await adoptableCats();
        setCats(data);
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;


    };

    const countryCodeArg = cats.map((item) => item.country_code)
    console.log(countryCodeArg)
    return (
        <div className=" bg-black p-5 rounded shadow-lg p-4 text-light text-center mt-4 mb-4">
            <Form className='wrapper'>
                <div >
                    <h1>Search cats nearby</h1>

                    <hr />
                </div>
                <Row className="gap-1">
                    <Col md="5">
                        <Form.Select onChange={handleOnChange}
                        >

                            <option value=""> -- sort by country code -- </option>

                            {countryCodeArg.map(itm => <option key={itm} value="itm"> {itm}</option>
                            )}
                        </Form.Select>
                    </Col>

                    <Col>
                        <div className="d-grid">
                            <Button variant="danger" type="submit">
                                Search Cats
                            </Button>
                        </div>
                    </Col>
                </Row>
                <Col className="d-flex gap-2 flex-wrap justify-content-around mt-5">
                    {cats.map((cat) => (
                        <CatCard key={cat.id} cats={cat} />
                    ))}
                </Col>
            </Form>


        </div >
    )
};