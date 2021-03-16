import React, { useEffect, useState } from 'react';
import Footer from './Footer';

function EventDetail({ match }) {
    const [ event, setEvent ] = useState({});
    const [ relatedEvents, setRelatedEvents ] = useState([]);

    useEffect(() => {
        fetch(getUrl(match.params.id))
        .then((response) => response.json())
        .then((data) => {
            setEvent(data.data.event);
            getRelatedEvents(data.data.event.related_events);
        });
    }, []);

    const getRelatedEvents = (related_events) => {
        if (related_events) {
            related_events.forEach((id) => {
                fetch(getUrl(id))
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.data.event);
                    setRelatedEvents(prev => {
                        return [...prev, data.data.event]
                    });
                });
            });
        }
        console.log(relatedEvents)
    }

    const getUrl = (id) => {
        return `https://api.hackthenorth.com/v3/graphql?query={ event(id: ${id}) { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }`;
    }

    return (<div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
        <h1>Event Name: {event.name}</h1>
        <h1>Event Type: {event.event_type}</h1>
        {relatedEvents.map(element => <h1 key={element.id}>{element.name}</h1>)}
    <Footer />
    </div>);
}

export default EventDetail;