// getEventDataById(id, callBack, getUrl) takes an Event ID, a state call back function,
//   and a getURL function and uses callBack to update state after making a GET request
//   to the appropriate endpoint
function getEventDataById(id, callBack, getUrl) {
  fetch(getUrl(id))
    .then((response) => response.json())
    .then((data) => {
      callBack((prev) => {
        return [...prev, data.data.event];
      });
    });
}

// formatTime(startTime) takes a start time in unix timestamp (ms) and returns 
//   a formatted date string
function formatTime(startTime) {
  const date = new Date(startTime);
  if (date.getHours() > 12) {
    return `${date.toDateString()} (${date.getHours() - 12} PM)`;
  } else {
    return `${date.toDateString()} (${date.getHours()} AM)`;
  }
}

export default getEventDataById;
export { formatTime };
