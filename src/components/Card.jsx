/*----------------------------------------------------------*
 * Name: Card.jsx
 * Description: Contains the Card React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardComponent(props) {
  return (
    <Card className="event-card">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.startTime}
        </Card.Subtitle>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link to={"/event/" + props.id}>
          <Button variant="primary" className="btn-sm btn-block">
            See more details
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default CardComponent;
