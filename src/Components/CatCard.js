import React from 'react';
import Card from 'react-bootstrap/Card';


export const CatCard = ({ cats }) => {

    return (
        <Card style={{ width: "20rem", color: "black" }}>
            <Card.Img variant="top" src={cats?.image?.url} />
            <Card.Body>
                <Card.Text>Name : {cats?.name}</Card.Text>
                <Card.Text> Origin : {cats?.origin}</Card.Text>
                <Card.Text>Grooming : {cats?.grooming}</Card.Text>
                <Card.Text>Health issue : {cats?.health_issues}</Card.Text>
                <Card.Text>{cats?.description}</Card.Text>
            </Card.Body>
        </Card>

    );
};

