import * as React from 'react';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import linkedIn from "./assets/LI-In-Bug.png";
import "../index.css";

const Footer = () => {

  return (
    <footer backgroundcolor="primary">
      <Container maxWidth="xl" sx={{backgroundColor: "skyblue"}}>
        <Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'} }}>
        <IconButton
          size="large"
          margin= "center"
          aria-haspopup="true"
          onClick={linkedIn}
          color="inherit"
        variant="h6" align="center">
          </IconButton>
          </Box>
          This project was created by.
          <br></br>
          <button><a href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={30} height={30}  />
      </a>
      <br></br>
      Rodney Nutall
      </button>

      <button><a href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={30} height={30} />
      </a>
      <br></br>
      Nigel Poblete.
      </button>

      <button><a href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={30} height={30} />
      </a>
      <br></br>
      Aaron (summer) Flores
      </button>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;