import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';

/*

        <h5 style={{display: 'inline', marginRight: '10px'}}>
            <Badge variant="primary">Primary</Badge>{' '}
        </h5>
*/

function CardComponent(props) {
    return (<Card style={{ width: '250px', marginTop: '100px' }}>
    <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.startTime}</Card.Subtitle>
        <Card.Text>
            {props.description}
        </Card.Text>
        <Button variant="primary" className="btn-sm btn-block">See more details</Button>
    </Card.Body>
    </Card>)
}

export default CardComponent;