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
import Box from '@mui/material/Box'
import Auth from '../utils/auth'
import { useMutation } from '@apollo/client';
import { SAVE_SEARCH } from '../utils/mutations';



function Title(props) {
  return (
    <Typography sx={{color: 'black', backgroundColor:'primary.main'}}   component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function SearchResults({ searchResults }) {
  // console.log('SearchResults component rendered')
 
  const isLoggedin = Auth.loggedIn()
  

  const [savedBills, setSavedBills] = useState('');

  
  const [saveSearch] = useMutation(SAVE_SEARCH);


const handleSave = async (row) => {
  try {
    // Execute the SAVE_SEARCH mutation
    const { data } = await saveSearch({
      variables: {
        searchInput: {
          billID: row.bill_id,
          billSummary: row.summary,
          billText: row.text,
          billTitle: row.title,
          changeHash: row.change_hash
        }
      }
    });

    // Get the saved bill data from the mutation response
    const savedBill = data.saveBill;

    // Update the savedBills state with the new saved bill
    setSavedBills((prevBills) => [...prevBills, savedBill]);

    console.log('Bill saved:', savedBill);
  } catch (error) {
    console.error('Error saving bill:', error);
  }
};

  // console.log('Rendering SearchResults:', searchResults);
  console.log('Saved Bills:', savedBills);
  return (
    <React.Fragment >
      <Title  >Search Results</Title>
      <Table size="small" sx={{backgroundColor:'primary.main'}} >
        <TableHead >
          <TableRow >
            <TableCell >Bill Number</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Bill Text</TableCell>
            <TableCell>Bill Information</TableCell>
            <TableCell>Save Bill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
        {searchResults.map((row, index) => (
        <TableRow key={index} sx={{color: 'black',backgroundColor:'primary.main'}}>
              <TableCell >{row.bill_number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell ><Link sx={{color: 'black'}}href={row.text_url}>{row.text_url}</Link></TableCell>
              <TableCell><Link sx={{color: 'black'}} href={row.url}>{row.url}</Link></TableCell>
              <TableCell><Button sx={{color: 'black'}}>Save</Button></TableCell>
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