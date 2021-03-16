import React, { useEffect, useState } from 'react';

function EventDetail({ match }) {
    useEffect(() => {
        fetchEvent();
    }, []);

    const [ event, setEvent ] = useState({});
    const [ relatedEvents, setRelatedEvents ] = useState([]);

    const fetchEvent = async () => {
        const res = await fetch(getUrl(match.params.id));
        const item = await res.json();
        setEvent(item.data.event);

        const related = item.data.event.related_events;
        related.map(async element => {
            const relatedRes = await fetch(getUrl(element));
            const relatedItem = await relatedRes.json();
            setRelatedEvents(previousState => ([...previousState, relatedItem.data.event]));
        })
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
        {relatedEvents.map(element => {
            <h1>{element}</h1>
            })}
    </div>);
}

export default EventDetail;