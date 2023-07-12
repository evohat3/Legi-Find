import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Paper } from "@mui/material";

import SearchResults from "../components/SearchResults";
import SelectSearchTypeDropdown from "../components/SelectSearchTypeDropdown";
import { getSearchState } from "../utils/API";
import "animate.css";
import heroImage from "../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg";


const styles = {
  paperContainer: {
    backgroundImage: `url(${heroImage})`,
  },
};

export default function Search() {
  // console.log('Search component rendered');

  const [userSearchData, setUserSearchData] = useState({
    search: "",
    stateName: "all",
  });
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

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     // Retrieve the search input and from the userSearchData state on line 12
  //     const { stateName, search } = userSearchData;

  //     try {

  //         // ****** getSearchState() is the function that sends the fetch request to Legiscan **********
  //       const response = await getSearchState(stateName, search);
  //       const data = await response.json();

  //         // ******** returns the fetch request object from utils/API object data **********
  //             console.log(data);

  //         // Converts the search results object to an array so that it can be mapped
  //     const searchResultArray = Object.values(data.searchresult);

  // //     searchResultArray.map((result, index) => {
  // //   console.log(`Result ${index + 1}:`);
  // //   console.log(`Relevance: ${result.relevance}`);
  // //   console.log(`State: ${result.state}`);
  // //   console.log(`Bill Number: ${result.bill_number}`);
  // //   console.log(`Bill ID: ${result.bill_id}`);
  // //   console.log(`Change Hash: ${result.change_hash}`);
  // // });

  //       setSearchResults(searchResultArray);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

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

      //     searchResultArray.map((result, index) => {
      //   console.log(`Result ${index + 1}:`);
      //   console.log(`Relevance: ${result.relevance}`);
      //   console.log(`State: ${result.state}`);
      //   console.log(`Bill Number: ${result.bill_number}`);
      //   console.log(`Bill ID: ${result.bill_id}`);
      //   console.log(`Change Hash: ${result.change_hash}`);
      // });

      setSearchResults(searchResultArray);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    
    <Paper style={styles.paperContainer}>
    <Box className="animate__animated animate__backInRight" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Grid width="80%"  container spacing={2} direction="row" alignItems="center" justifyContent="center" sx={{ backgroundColor: 'primary.main' , border: 1 ,marginTop: 8,  }}>
        <Grid component="form"  justifyContent="left">
          <TextField style={{ width: '100%' }} onChange={handleSearchChange} id="outlined-basic" label="Enter your search here" variant="outlined" size="lg" />
        </Grid>
        <Grid item xs={4}>
          <SelectSearchTypeDropdown onDropdownChange={handleDropdownChange} />
        </Grid>
        <Grid item xs={1} justifyContent="right">
          <Button sx={{ color: 'black'}}onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
      <SearchResults searchResults={searchResults} />
    </Box>
    </Paper>
  
  );
}

//on line 48 do on click event, make function that handles on sear

// () : ()

// if x is true render this block, if false render other block

//<Grid xs={1}>
{
  /* <Button onClick={handleSubmit} sx={{border:1} }>Search</Button>
</Grid> */
}
