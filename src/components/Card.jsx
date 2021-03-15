import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

function CardComponent(props) {
    return (
        <Card className="event-card">
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.startTime}</Card.Subtitle>
            <Card.Text>
            {props.description}
            </Card.Text>
            {/* <Card.Link href={"/event/" + props.id}>See More</Card.Link> */}
            {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
        <Card.Footer>
            <a href={"/event/" + props.id}>
                <Button variant="primary" className="btn-sm btn-block">See more details</Button>
            </a>
        </Card.Footer>
        </Card>);
}

export default CardComponent;