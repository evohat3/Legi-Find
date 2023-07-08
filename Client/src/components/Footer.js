import * as React from 'react';
import "../index.css";
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import linkedIn from "./assets/LI-In-Bug.png";


const Footer = () => {
  return (
    <footer sx={{backgroundColor: "primary"}}>
      <Container maxWidth="xl" sx={{backgroundColor: "skyblue"}}>
        <Typography variant="h6" align="center">
          Legi-Find was created by .
          <br></br>
          <IconButton
          href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={40} height={40} />
        <br></br>
        Rodney Nutall
      </IconButton>
      <IconButton
          href="https://www.linkedin.com/in/nigel-poblete?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={40} height={40} />
        <br></br>
        Nigel Poblete
      </IconButton>
      <IconButton
          href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={40} height={40} />
        <br></br>
        Aaron (Summer) Flores
      </IconButton>
      
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
