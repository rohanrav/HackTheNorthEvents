import React, { useEffect, useState } from 'react';
import Card from './Card'

const options = { weekday: 'long', month: 'long', day: 'numeric' };

function renderCard(event) {
    return (<Card id={event.id}
                key={event.id}
                name={event.name} 
                description={event.description.substring(0, 250) + '...'} 
                startTime={new Date(event.start_time).toLocaleDateString(undefined, options)}
            ></Card>);
}

function EventsComponent(props) {
    const [ events, setEvents ] = useState([]);

    useEffect(() => {
        fetch('https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }')
        .then((response) => response.json())
        .then((data) => {
            let res = data.data.events;
            res = res.filter((event) => {
                if (!props.isLoggedIn) {
                    console.log('triggered')
                    if (event.permission === 'private') {
                        return false;
                    }
                }
                return true;
            })
            console.log(res);
            setEvents(res)
        });
    }, [])

    return (
    <div>
        <div className="grid">
            {events.map((event) => renderCard(event))}
        </div>
    </div>);
}

export default EventsComponent;