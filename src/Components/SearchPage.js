import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { CatCard } from './CatCard';
import { adoptableCats } from '../Api Handel/fetchHelper';

export const SearchPage = () => {
    // State to store the fetched cat data and the selected country
    const [cats, setCats] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        // Fetch cats only if the cats array is empty and fetchcatch funciton every time to render the code
        !cats.length && fetchCats()
    }, []);

    // Function to fetch the adoptable cats data
    const fetchCats = async () => {
        const data = await adoptableCats();
        setCats(data);
    };

    // Event handler for the select input onChange event
    const handleOnChange = (e) => {
        const { value } = e.target;
        setCountry(value);
    };

    // Function to get unique country codes from the fetched cats data
    const getUniqueCountryCodes = () => {
        //used set to remove the repetation for country code
        const countryCodes = new Set();
        cats.forEach((cat) => {
            countryCodes.add(cat.origin);
        });
        return Array.from(countryCodes);
    };
    const countryCodeArg = getUniqueCountryCodes();

    return (
        <div className=" bg-black p-5 rounded shadow-lg p-4 text-light text-center mt-4 mb-4">
            <Form className='wrapper'>
                <div >
                    <h1>Search cats nearby</h1>
                    <hr />
                </div>
                <Row >

                    <Form.Select onChange={handleOnChange}>
                        <option value=""> Select by country  </option>
                        {countryCodeArg.map(itm => (
                            <option key={itm} value={itm}> {itm}</option>
                        ))}
                    </Form.Select>

                    <h4 className='mt-4'>There are {cats.filter(cat => cat?.origin === country).length} cats available in {country}</h4>

                </Row>
                <Col className="d-flex gap-2 flex-wrap justify-content-around mt-5">
                    {cats.filter(cat => cat?.origin === country).map((cat) => (
                        <CatCard key={cat.id} cats={cat} />
                    ))}


                </Col>
            </Form>
        </div >
    )
};
