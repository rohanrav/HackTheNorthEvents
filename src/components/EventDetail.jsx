import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Table, Button, CardDeck } from 'react-bootstrap';
import _ from 'lodash';
import Card from './Card'

const options = { weekday: 'long', month: 'long', day: 'numeric' };

function EventDetail(props) {
    const [ event, setEvent ] = useState({});
    const [ relatedEvents, setRelatedEvents ] = useState([]);
    const [ speakers, setSpeakers ] = useState([]);
    const [ time, setTime ] = useState({
        timeString: '',
        timeDuration: ''
    });

    useEffect(() => {
        setRelatedEvents([]);
        fetch(getUrl(props.match.params.id))
        .then((response) => response.json())
        .then((data) => {
            setEvent(data.data.event);
            const date = new Date(data.data.event.start_time);
            let timeS = '';
            if (date.getHours() > 12) {
                timeS = `${date.toDateString()} (${date.getHours() - 12} PM)`
            } else {
                timeS = `${date.toDateString()} (${date.getHours()} AM)`
            }

            setTime(prev => {
                return {
                    timeString: timeS,
                    timeDuration: Math.abs((new Date(data.data.event.end_time) - date)) / 36e5
                }
            });

            setSpeakers(data.data.event.speakers);
            getRelatedEvents(data.data.event.related_events);
        });
    }, [props.match.params.id]);

    const getRelatedEvents = (related_events) => {
        if (related_events) {
            related_events.forEach((id) => {
                fetch(getUrl(id))
                .then((response) => response.json())
                .then((data) => {
                    setRelatedEvents(prev => {
                        return [...prev, data.data.event]
                    });
                });
            });
        }
    }

    const getUrl = (id) => {
        return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
    }

    function renderCard(event) {
        return (<Card id={event.id}
                    key={event.id}
                    name={event.name} 
                    description={event.description.substring(0, 250) + '...'} 
                    startTime={new Date(event.start_time).toLocaleDateString(undefined, options)}
                    className="related-events-card"
                ></Card>);
    }

    return (
        <div>
            <div className="event-detail-container">
                <Container fluid>
                    <Row>
                        <Col md={8}>
                            <h2 className="event-name">{event.name}</h2>
                                {!props.loggedIn ? <a href={event.public_url}><Button variant="primary" className="btn-block btn-join">See More</Button></a> :
                                <a href={event.private_url}><Button variant="primary" className="btn-block btn-join">Join Event</Button></a>}
                                
                                <Table striped bordered hover size="md">
                                <tbody>
                                    <tr>
                                        <td>Start Time</td>
                                        <td colSpan="2">{time.timeString}</td>
                                    </tr>
                                    <tr>
                                        <td>Duration</td>
                                        <td colSpan="2">{time.timeDuration <= 1 ? time.timeDuration + ' Hour' : time.timeDuration + ' Hours'}</td>
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
                            {speakers.map(speaker => {
                                return (
                                    <div key={speaker.name} className="speaker-container">
                                        <h2 className="speakers-title">Speakers</h2>
                                        <h5 className="name-title">Name: {speaker.name}</h5>
                                        <div className="speaker-img-container">
                                            {speaker.profile_pic && <img className="speaker-img" alt={speaker.name} src={speaker.profile_pic}></img>}
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
                <h2 className="related-events-title">Related Events</h2>
                    <CardDeck className="related-events">
                        {relatedEvents.map(event => renderCard(event))}
                    </CardDeck>
                </Col>
            </Row>
        </div>
    );
}

export default EventDetail;