import React from 'react';
import { Form } from 'react-bootstrap';

function Filter(props) {
    return (<div>
        <h5>Filter Events</h5>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Search" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Event Type</Form.Label>
            <div key={`default-checkbox`} className="mb-3">
                <Form.Check 
                inline
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Workshop`}
                />
                <Form.Check 
                inline
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Tech Talk`}
                />
                <Form.Check 
                inline
                    type="checkbox"
                    id={`default-checkbox`}
                    label={`Activity`}
                />
                </div>
            </Form.Group>
            <Form.Group controlId="formBasicRange">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="range" />
            </Form.Group>
        </Form>
    </div>);
}

export default Filter;