import axios from 'axios';

// axios.get("/test").then(response => {
//   console.log(response.data)
// })

function getDataAll(permission) { // return a list of events
/* // filter by permission 
https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }
*/
}

function getDataById(id, permission) { // return 1 event if found, and null if not found
    /* // check if permission is allowed after you get the event 
    https://api.hackthenorth.com/v3/graphql?query={ event(id: EVENT_ID) { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }
    */
}

function getDataByName(eventName, permission) { // return 1 event if found, and null if not found
    data = getDataAll(permission);
    // search event by name - have all events dissapear and event results show up 
}

export default getDataAll;
export { getDataById, getDataByName };