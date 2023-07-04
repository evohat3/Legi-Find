import * as React from 'react';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


const Footer = () => {

  return (
    <footer backgroundcolor="primary">
      <Container maxWidth="xl" sx={{backgroundColor: "skyblue"}}>
        <Typography variant="h2" align="center">
          This is the footer content.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;