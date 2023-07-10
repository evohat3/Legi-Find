import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default function SearchResults({ searchResults }) {
  return (
    <React.Fragment>
      <Title>Search Results</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Bill Number</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Bill Text</TableCell>
            <TableCell>Bill Information</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          searchResults.map((row) => (
            <TableRow key={row.bill_id}>
              <TableCell>{row.bill_number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.state
}</TableCell>
              <TableCell>{row.bill_information}</TableCell>
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