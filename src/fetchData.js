import axios from 'axios';

function getDataAll(loggedIn) {
    const url = "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time " + 
                     "description speakers { name profile_pic } public_url private_url related_events } }"

    const result = () => {
        const url = "https://api.hackthenorth.com/v3/graphql?query={ events { id name event_type permission start_time end_time " + 
                     "description speakers { name profile_pic } public_url private_url related_events } }"

        axios.get(url).then((response) => { 
            console.log(response.data);
        }).catch(error => console.error(`Error: ${error}`));
    }
            res.filter((event, idx) => {
                if (!loggedIn) {
                    if (event.permission === 'private') {
                        return false;
                    }
                }
                return true;
                })
}

function getDataById(id, permission) { // return 1 event if found, and null if not found
    /* // check if permission is allowed after you get the event 
    https://api.hackthenorth.com/v3/graphql?query={ event(id: EVENT_ID) { id name event_type permission start_time end_time description speakers { name profile_pic } public_url private_url related_events } }
    */
}

function getDataByName(eventName, permission) { // return 1 event if found, and null if not found
    //data = getDataAll(permission);
    // search event by name - have all events dissapear and event results show up 
}

export { getDataAll, getDataById, getDataByName };