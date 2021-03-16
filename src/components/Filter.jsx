import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function Filter(props) {
    const [ localFilter, setLocalFilter ] = useState(props.filter);

    const updateCheckBox = (event) => {}
    const updateFilterSearch = (event) => { //filterCallbackFromParent
        const searchVal = event.target.value;
        setLocalFilter(prev => {
            return {
                ...prev,
                search: searchVal
            }
        });
        props.filterCallBackHome(localFilter);
    }

    return (<div className="filter-form">
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
    </div>);
}

export default Filter;