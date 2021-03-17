/*----------------------------------------------------------*
 * Name: EventDetail.jsx
 * Description: Contains the Detailed Event View React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useEffect, useState } from "react";
import { Container, Col, Row, Table, Button, CardDeck } from "react-bootstrap";
import _ from "lodash";
import Card from "./Card";
import getEventDataById, { formatTime } from './utils'

// Global Constants
const timeFormat = { weekday: "long", month: "long", day: "numeric" };

function EventDetail(props) {
  // Setting state constants
  const [event, setEvent] = useState({});
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [speakers, setSpeakers] = useState([]);
  const [time, setTime] = useState({
    timeString: "",
    timeDuration: "",
  });

  // Setting the useEffect Hook to fetch appropriate event data
  useEffect(() => {
    setRelatedEvents([]);
    fetch(getUrl(props.match.params.id))
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.data.event);
        setTime((prev) => {
          return {
            timeString: formatTime(data.data.event.start_time),
            timeDuration:
              Math.abs(new Date(data.data.event.end_time) - new Date(data.data.event.start_time)) / 36e5,
          };
        });

        setSpeakers(data.data.event.speakers);
        getRelatedEvents(data.data.event.related_events);
      });
  }, [props.match.params.id]);

  // getRelatedEvents(related_events) fetches data of related events given an
  //   array of Event ID's
  const getRelatedEvents = (related_events) => {
    if (related_events) {
      related_events.forEach((id) => {
        getEventDataById(id, setRelatedEvents, getUrl);
      });
    } else {
      console.log("Error Fetching Related Event Data")
    }
  };

  // getUrl(id) returns the API endpoint for an event given it's ID
  const getUrl = (id) => {
    return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
  };

  // renderCard(event) returns a React Card component given an event object
  function renderCard(event) {
    return (
      <Card
        id={event.id}
        key={event.id}
        name={event.name}
        description={event.description.substring(0, 250) + "..."}
        startTime={new Date(event.start_time).toLocaleDateString(
          undefined,
          timeFormat
        )}
        className="related-events-card"
      ></Card>
    );
  }

  return (
    <div>
      <div className="event-detail-container">
        <Container fluid>
          <Row>
            <Col md={8}>
              <h2 className="event-name">{event.name}</h2>
              {!props.loggedIn ? (
                <a href={event.public_url}>
                  <Button variant="primary" className="btn-block btn-join">
                    See More
                  </Button>
                </a>
              ) : (
                <a href={event.private_url}>
                  <Button variant="primary" className="btn-block btn-join">
                    Join Event
                  </Button>
                </a>
              )}

              <Table striped bordered hover size="md">
                <tbody>
                  <tr>
                    <td>Start Time</td>
                    <td colSpan="2">{time.timeString}</td>
                  </tr>
                  <tr>
                    <td>Duration</td>
                    <td colSpan="2">
                      {time.timeDuration <= 1
                        ? time.timeDuration + " Hour"
                        : time.timeDuration + " Hours"}
                    </td>
                  </tr>
                  <tr>
                    <td>Event Type</td>
                    <td colSpan="2">{_.startCase(event.event_type)}</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td colSpan="2">{event.description}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={4}>
              {speakers.map((speaker) => {
                return (
                  <div key={speaker.name} className="speaker-container">
                    <h2 className="speakers-title">Speakers</h2>
                    <h5 className="name-title">Name: {speaker.name}</h5>
                    <div className="speaker-img-container">
                      {speaker.profile_pic && (
                        <img
                          className="speaker-img"
                          alt={speaker.name}
                          src={speaker.profile_pic}
                        ></img>
                      )}
                    </div>
                  </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <Col>
          {(relatedEvents.length > 1) && <h2 className="related-events-title">Related Events</h2>}
          <CardDeck className="related-events">
            {relatedEvents.map((event) => renderCard(event))}
          </CardDeck>
        </Col>
      </Row>
    </div>
  );
}

export default EventDetail;
