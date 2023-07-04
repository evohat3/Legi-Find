//https://api.legiscan.com/?key=46f60bb5da729de39fe63400d12082db&op=getBill
require('dotenv').config()
const LEGI_KEY  = process.env.LEGI_KEY

//call get bill from legiscan APIm fill in line 10 when we know exactly what we want form each bill
export const getBill = (LEGI_KEY, bill_id) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getBill${bill_id}`, {
        method: 'POST',
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}

//Searches legiscan API by state
//need to modify year variable to filter years. Will be "&year=YEAR" after query
export const getSearchState = (LEGI_KEY, state, query) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&state=${state}&query=${query}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}

//searches legiscan API by exact session ID
export const getSearchSession = (LEGI_KEY, session_id, query) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&id=${session_id}&query=${query}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}


//searches for list of legislators in a paticular session
export const getSessionPeople = (session_id) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSessionPeople=${session_id}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}

//gets list of session that are avalible, need to modify state variable to filter state. Will be "&state=STATE" after session_id
export const getSessionList = (LEGI_KEY) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSessionList` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}

//sets a monitor on a paticular pull for updates on it
//for action: set = montior, remove = stop watching, and set = set stance (watch, support, oppose)
//possible mock votes using set functionality?
export const setMonitor = (LEGI_KEY, bill_ids, action) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=setMonitor&action=${action}&list=${bill_ids}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}