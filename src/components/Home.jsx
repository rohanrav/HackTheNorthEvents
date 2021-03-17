/*----------------------------------------------------------*
 * Name: Events.jsx
 * Description: Contains the Home React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import Events from "./Events";
import Footer from "./Footer";

function Home(props) {
  const [eventData, setEventData] = useState([]);
  const [filter, setFilter] = useState({
    search: "",
    eventType: {
      workshop: true,
      tech_talk: true,
      activity: true,
    },
    sortByTime: false,
  });

  useEffect(() => {
    fetch(
      "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }"
    )
      .then((response) => response.json())
      .then((data) => {
        setEventData(data.data.events);
      });
  }, []);

  const updateFilterSearch = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    setFilter((prev) => {
      if (name === "sortByTime") {
        value = !prev[name];
      } else if (prev.eventType[name] !== undefined) {
        return {
          ...prev,
          eventType: {
            ...prev.eventType,
            [name]: !prev.eventType[name],
          },
        };
      }

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="page-container">
      <div className="contain">
        <h2 className="events-heading">Events</h2>
        <Row>
          <Col lg={10}>
            <Events
              isLoggedIn={props.loggedIn}
              filter={filter}
              eventData={eventData}
            />
          </Col>
          <Col lg={2} className="filter-col">
            <div className="filter-form">
              <h5>Filter Events</h5>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    name="search"
                    onChange={updateFilterSearch}
                  />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Event Type</Form.Label>
                  <div key={`default-checkbox`} className="mb-3">
                    <Form.Check
                      inline
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Workshop`}
                      name="workshop"
                      checked={filter.eventType["workshop"]}
                      onChange={updateFilterSearch}
                    />
                    <Form.Check
                      inline
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Tech Talk`}
                      name="tech_talk"
                      checked={filter.eventType["tech_talk"]}
                      onChange={updateFilterSearch}
                    />
                    <Form.Check
                      inline
                      type="checkbox"
                      id={`default-checkbox`}
                      label={`Activity`}
                      name="activity"
                      checked={filter.eventType["activity"]}
                      onChange={updateFilterSearch}
                    />
                  </div>
                </Form.Group>
                <Form.Group controlId="formBasicRange">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control type="range" />
                </Form.Group>
                <Form.Group controlId="formBasicRange">
                  <Button
                    variant="primary"
                    className="btn-block"
                    name="sortByTime"
                    onClick={updateFilterSearch}
                  >
                    Sort By Time
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
