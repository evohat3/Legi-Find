import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

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
    <React.Fragment >
      <Title>Search Results</Title>
      <Table xs={{bgColor: 'primary.main'}}size="small">
        <TableHead>
          <TableRow>
            <TableCell>Bill Number</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Bill Text</TableCell>
            <TableCell>Bill Information</TableCell>
            <TableCell>Save Bill</TableCell>
          </TableRow>
        </TableHead>
        <TableBody xs={{bgColor: 'primary.main',}}>
          {
          searchResults.map((row) => (
            <TableRow key={row.bill_id}>
              <TableCell xs={{color:'red'}}>{row.bill_number}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell><Link href={row.text_url}>{row.text_url}</Link></TableCell>
              <TableCell><Link href={row.url}>{row.url}</Link></TableCell>
              <Button>Save</Button>
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