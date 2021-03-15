import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

/*

        <h5 style={{display: 'inline', marginRight: '10px'}}>
            <Badge variant="primary">Primary</Badge>{' '}
        </h5>
*/

function CardComponent(props) {
    return (
        <Card style={{ width: '250px', marginTop: '40px' }}>
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <a href={"/event/" + props.id}>
                <Button variant="primary" className="btn-sm btn-block">See more details</Button>
            </a>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">{props.startTime}</small>
        </Card.Footer>
        </Card>);
}

export default CardComponent;