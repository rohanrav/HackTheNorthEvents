/*----------------------------------------------------------*
 * Name: Events.jsx
 * Description: Contains the Events React Component
 * Author: Rohan Ravindran
 *----------------------------------------------------------*/

import React, { useEffect, useState } from "react";
import Card from "./Card";

// Global Constants
const options = { weekday: "long", month: "long", day: "numeric" };

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
        options
      )}
    ></Card>
  );
}

function EventsComponent(props) {
  // Setting state constants
  const [events, setEvents] = useState([]);

  // Setting the useEffect Hook to filter and sort event data
  useEffect(() => {
    let res = props.eventData.filter((event) => {
      if (!props.isLoggedIn) {
        if (event.permission === "private") {
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
      let sortResult = new Date(b.start_time) - new Date(a.start_time);
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
      <div className="grid">{events.map((event) => renderCard(event))}</div>
    </div>
  );
}

export default EventsComponent;
