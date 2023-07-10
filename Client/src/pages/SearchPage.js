import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SearchResults from '../components/SearchResults';
import SelectSearchTypeDropdown from '../components/SelectSearchTypeDropdown';
import { getSearchState } from '../utils/API'
import 'animate.css';

export default function Search() {
  const [userSearchData, setUserSearchData] = useState({ search: '', stateName: 'all' });
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setUserSearchData((prevData) => ({
      ...prevData,
      search: value,
    }));
  };

  const handleDropdownChange = (value) => {
    setUserSearchData((prevData) => ({
      ...prevData,
      stateName: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Retrieve the search input and from the userSearchData state on line 12
    const { stateName, search } = userSearchData;
    
    try {

        // ****** getSearchState() is the function that sends the fetch request to Legiscan **********
      const response = await getSearchState(stateName, search);
      const data = await response.json();
      
        // ******** returns the fetch request object from utils/API object data **********
            // console.log(data); 
     
        // Converts the search results object to an array so that it can be mapped
    const searchResultArray = Object.values(data.searchresult);
        
        console.log(searchResultArray)
      setSearchResults(searchResultArray);

// TODO find a way to filter the array so that it only shows the info for the state that was selected.


    //   console.log(searchResultArray)

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="animate__animated animate__backInRight" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Grid width="80%" container spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{ border: 1 }}>
        <Grid component="form" xs={7} justifyContent="left">
          <TextField style={{ width: '100%' }} onChange={handleSearchChange} id="outlined-basic" label="Enter your search here" variant="outlined" size="lg" />
        </Grid>
        <Grid xs={4}>
          <SelectSearchTypeDropdown onDropdownChange={handleDropdownChange} />
        </Grid>
        <Grid xs={1} justifyContent="right">
          <Button onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
      <SearchResults searchResults={searchResults} />
    </Box>
  );
}

//on line 48 do on click event, make function that handles on sear

// () : ()

// if x is true render this block, if false render other block

//<Grid xs={1}>
{/* <Button onClick={handleSubmit} sx={{border:1} }>Search</Button>
</Grid> */}