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

//need to modify year variable to filter years
export const getSearchState = (LEGI_KEY, state, query) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&state=${state}&query=${query}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}

export const getSearchSession = (LEGI_KEY, session_id, query) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}&op=getSearch&id=${session_id}&query=${query}` ,{
        body: JSON.stringify({

        }),
        header: {
            'Content-type': 'application/json',
            }
      });
}