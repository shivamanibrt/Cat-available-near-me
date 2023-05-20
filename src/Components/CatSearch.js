import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';

export const CatSearch = ({ cats }) => {


    return (
        <div>
            <Card style={{ width: "20rem", color: "black" }}>
                <Card.Img variant="top" src={cats?.url} />
                <Card.Body>

                    <Card.Title></Card.Title>
                    <Card.Text>  Height : {cats?.height} </Card.Text>
                    <Card.Text>Width : {cats?.width} </Card.Text>
                    <Card.Title>{cats?.breeds}</Card.Title>
                    <Card.Title>{cats?.name}</Card.Title>

                </Card.Body>

            </Card>
        </div>
    );
};
