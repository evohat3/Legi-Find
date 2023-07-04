//https://api.legiscan.com/?key=46f60bb5da729de39fe63400d12082db&op=getBill


export const getBill = (LEGI_KEY) => {
    return fetch(`https://api.legiscan.com/?key=${LEGI_KEY}getBill`, {

      });
}