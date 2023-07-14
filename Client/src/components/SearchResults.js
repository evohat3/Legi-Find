import React, { useState } from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import { useMutation, } from '@apollo/client';
import { SAVE_SEARCH } from '../utils/mutations';


function Title(props) {
  return (
    <Typography sx={{ color: 'black', backgroundColor: 'primary.main' }} component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function SearchResults({ searchResults }) {


  const [searchResult, setSearchResults] = useState('');



  const [saveSearch, { loading, error, data }] = useMutation(SAVE_SEARCH);

// ** Saves data that is passed down to the SearchResults component as props. refer to line29: export default function SearchResults({ searchResults })
// **** Since the Legi-scan api data is an array of objects by default, we pass index as an argument to the handleSave and define them both on line 89 onClick={() => handleSave(index)}
  const handleSave = async (index) => {

    // We take the specific index (the bill) that we clicked on and point that specific object to the  ** searchData ** variable.
    const searchData = searchResults[index];
  
    // ** uncomment to get the bill you clicked save on logged in the console on Browser
    // console.log(searchData)
    try {

      // *** Creates a { data } object and ties the variables to it using the properties from the searchData variable.
     // notice that the data.property keys are camelCase and the values are snake_case
     // when you console.log searchData the property names it returns are snake_case
     // seemed like things would be easier to make it camel case when its stored in our mongo db server
const { data } = await saveSearch({
  variables: {
    billId: searchData.bill_id,
    billNumber: searchData.bill_number,
    changeHash: searchData.change_hash,
    lastAction: searchData.last_action,
    lastActionDate: searchData.last_action_date,
    relevance: searchData.relevance,
    researchUrl: searchData.research_url,
    state: searchData.state,
    textUrl: searchData.text_url,
    title: searchData.title,
    url: searchData.url,
  },
});
      console.log('Bill saved:', data);
    } catch (error) {
      console.error('Error saving bill:', error);
    }
  };
  

  console.log('Saved Bills:', searchResult);
  return (
    <React.Fragment>
      <Title>Search Results</Title>
      <Table size="small" sx={{ backgroundColor: 'primary.main' }}>
        <TableHead>
          <TableRow>
            <TableCell>Bill Number</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Bill Text</TableCell>
            <TableCell>Bill Information</TableCell>
            <TableCell>Save Bill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/*   this jsx logic below takes the searchResults prop 
              data which is all of the data from the state selected, 
              which all of the data is an array of objects so it takes
              the array and maps out all the data for each bill for the state
              and spits them out into rows on the table */}

          {searchResults.map((row, index) => (
            <TableRow key={index} sx={{ color: 'black', backgroundColor: 'primary.main' }}>
              <TableCell>{row.bill_number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell><Link sx={{ color: 'black' }} href={row.text_url}>{row.text_url}</Link></TableCell>
              <TableCell><Link sx={{ color: 'black' }} href={row.url}>{row.url}</Link></TableCell>

                                  {/* Here is where the handleSave function is invoked and 
                                  it grabs the specific object tied to the array via its index */}
              <TableCell><Button onClick={() => handleSave(index)} sx={{ color: 'black', '&:hover': { backgroundColor: 'white', color: 'black' } }}>Save</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
