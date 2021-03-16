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
        let res = props.eventData.filter((event) => {
            if (!props.isLoggedIn) {
                if (event.permission === 'private') {
                    return false;
                }
            }

            if (event.name.toLowerCase().includes(props.filter.search.toLowerCase())) {
                if (props.filter.eventType[event.event_type]) {
                    return true;
                }
            }
            
            return false;
        });
        
        res.sort((a, b) => {
            let sortResult = new Date(b.start_time) - new Date(a.start_time);;
            if (props.filter.sortByTime) {
                return sortResult;
            } else {
                return -sortResult;
            }
        });
    
        setEvents(res);
    }, [props.filter, props.isLoggedIn, props.eventData]);

    return (
    <div>
        <div className="grid">
            {events.map((event) => renderCard(event))}
        </div>
    </div>);
}

export default EventsComponent;