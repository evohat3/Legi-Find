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

  const handleSave = async (index) => {
    const searchData = searchResults[index];
  
    console.log(searchData)

   
  
    try {
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
          {searchResults.map((row, index) => (
            <TableRow key={index} sx={{ color: 'black', backgroundColor: 'primary.main' }}>
              <TableCell>{row.bill_number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell><Link sx={{ color: 'black' }} href={row.text_url}>{row.text_url}</Link></TableCell>
              <TableCell><Link sx={{ color: 'black' }} href={row.url}>{row.url}</Link></TableCell>
              <TableCell><Button onClick={() => handleSave(index)} sx={{ color: 'black' }}>Save</Button></TableCell>
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
