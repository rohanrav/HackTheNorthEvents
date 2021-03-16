import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Events from './Events';

function Home(props) {
    const [ filter, setFilter ] = useState({
        search: '',
        eventType: ['workshop',  'event_type', 'activity']
    });
    const updateCheckBox = (event) => {}

    const updateFilterSearch = (event) => {
        const searchVal = event.target.value;
        setFilter(prev => {
            return {
                ...prev,
                search: searchVal
            }
        });
    }

    return (
        <div>
            <h2 className="events-heading">Events</h2>
            <Row>
              <Col md={10}>
              <Events isLoggedIn={props.loggedIn} filter={filter}/>
              </Col>
              <Col md={2}>
              <div className="filter-form">
                <h5>Filter Events</h5>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Control type="text" placeholder="Search" onChange={updateFilterSearch} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Event Type</Form.Label>
                    <div key={`default-checkbox`} className="mb-3">
                        <Form.Check 
                        inline
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`Workshop`}
                            name='workshop'
                            checked={true}
                            onChange={updateCheckBox}
                        />
                        <Form.Check 
                        inline
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`Tech Talk`}
                            name='tech_talk'
                            checked={true}
                            onChange={updateCheckBox}
                        />
                        <Form.Check 
                        inline
                            type="checkbox"
                            id={`default-checkbox`}
                            label={`Activity`}
                            name='activity'
                            checked={true}
                            onChange={updateCheckBox}
                        />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="range" />
                    </Form.Group>
                </Form>
            </div>
              </Col>
            </Row>
        </div>
    );
}

export default Home;