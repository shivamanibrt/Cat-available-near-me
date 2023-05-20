import { Row } from "react-bootstrap";

export const About = () => {
    return (
        <Row className='p-4 bg-secondary text-light text-center'>
            <p>This app allows you to search for cats for adoption in your area.</p>
            <p>Copyright © : 2023 | The Cat API.</p>
        </Row>
    );
};
