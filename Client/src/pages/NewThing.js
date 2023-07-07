import React, { useState, useEffect } from 'react';

// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl';
import { getSearchState } from '../utils/API'
//may need to add local storage

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"];

// const searchresult = "searchresult";



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

            if (!response.ok) {
              throw new Error('something went wrong!');
            }

          const data  = await response.json();

          const searchData = data.map((numbers) => ({
            billID: numbers.bill_id,
            changeHash: numbers.change_hash,
            billSummary: numbers.url,
            billText: numbers.text_url,
            billTitle: numbers.title
          }));


          setSearchResults(searchData)
          setSearchInput('');
          console.log(searchData)
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