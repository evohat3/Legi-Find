//examp[le call: https://api.legiscan.com/?key=46f60bb5da729de39fe63400d12082db&op=getBill
import React from 'react';
const LEGI_KEY  = process.env.REACT_APP_LEGI_KEY

//gets list of session that are avalible, need to modify state variable to filter state. Will be "&state=STATE" after session_id
export const getSessionList = async (data) => {

    // const session = data.sessions

    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSessionList` ,{
    //     method: 'POST',
    //     body: JSON.stringify({
    //         sessionid: session.sessionid, 
    //         stateid: session.stateid,
    //         year_start: session.year_start,
    //         year_end: session.year_end,
    //         session.session_tag,
    //         session.session_title,
    //         session.session_name,
    //         session.dataset_hash
    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   console.log(data)
    //   setPosts((data ) =>[
    //     data.sessions.sessionid, 
    //     data.sessions.stateid,
    //     data.sessions.year_start,
    //     data.sessions.year_end,
    //     data.sessions.session_tag,
    //     data.sessions.session_title,
    //     data.sessions.session_name,
    //     data.session.dataset_hash
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
      
}

//searches for list of legislators in a paticular session
export const getSessionPeople = async (session_id) => {
    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSessionPeople=${session_id}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({

    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((posts) =>[
    //     data.sessionpeople.people
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

//Searches legiscan API by state
//need to modify year variable to filter years. Will be "&year=YEAR" after query
export const getSearchState = async (LEGI_KEY, state, query) => {
     await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&state=${state}&query=${query}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({

    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.searchresult
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

//searches legiscan API by exact session ID
export const getSearchSession = async (LEGI_KEY, session_id, query) => {
    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&id=${session_id}&query=${query}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({

    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.searchresult
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

//call get bill from legiscan API 
export const getBill = async (LEGI_KEY, bill_id) => {
    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getBill${bill_id}`, {
    //     method: 'POST',
    //     body: JSON.stringify({

    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.bill
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

//search person by id
export const getPerson = async (LEGI_KEY, people_id ) => {
    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getPerson&id=${people_id}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({
    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.person
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

//gets bill number, id and change_hash for paticular session
export const getMasterListRaw = async (LEGI_KEY, session_id ) => {
    await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getMasterListRaw=${session_id}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({
    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.masterlist
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

// returns a master list of summary bill data in the given session_id or current state session. 

export const getMasterList = async (LEGI_KEY, session_id ) => {
     await fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getMasterList=${session_id}` ,{
    //     method: 'POST',
    //     body: JSON.stringify({
    //     }),
    //     header: {
    //         'Content-type': 'application/json',
    //         }
    //   });
    //   let data = await response.json();
    //   setPosts((data) =>[
    //     data.masterlist
    //   ])
    //   .catch((err) => {
    //     console.log(err.message);
      })
}

