import * as React from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


const Footer = () => {

  return (
    <footer >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          This is the footer content.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;