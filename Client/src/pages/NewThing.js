import React, { useState, useEffect } from 'react';

// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { getSearchState } from '../utils/API'

//may need to add local storage

export default function NewThing() {

    const [searchResults, setSearchResults] = useState([]);

    const [searchInput, setSearchInput] = useState('test');
    //create state to hold local storage here
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!searchInput) {
          return false;
        }

        try {
          
          const response = await getSearchState(searchInput);
          // console.log(searchInput)
          // console.log(response)
            if (!response.ok) {
              throw new Error('something went wrong!');
            }

          let data  = await response.json();
          // console.log(data.searchresult)
          
          // console.log()

          for (let index in data.searchresult) {
            // console.log(index)
            // console.log(data.searchresult[index]);
          }

          let searchData = {};
          for (let index in data.searchresult) {
            searchData[index] = {
              billID: data.searchresult[index].bill_id,
              changeHash: data.searchresult[index].change_hash,
              bilSummary: data.searchresult[index].url,
              billText: data.searchresult[index].text_url,
              billTitle: data.searchresult[index].title
            }
            
          }
          // data.map((numbers) => ({
          //   billID: numbers.bill_id,
          //   changeHash: numbers.change_hash,
          //   billSummary: numbers.url,
          //   billText: numbers.text_url,
          //   billTitle: numbers.title
          // })
          // );
          
          
          
          // console.log(searchData);
          setSearchResults(searchData)
          
          // console.log(searchData)
        } catch (err) {
          console.error(err);
        }
      };
    return (
        <Box>
            <Button onClick={ handleFormSubmit }
            >
                test
            </Button>
        </Box>  
    )
}