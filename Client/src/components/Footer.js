import * as React from 'react';
import "../index.css";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';
import linkedIn from "./assets/LI-In-Bug.png";



const Footer = () => {

  return (
    
    <footer backgroundcolor="primary">
      <Box maxWidth="xl" sx={{backgroundColor: "skyblue"}}>
        <Typography 
        variant="h6"
         align="center">

          Legi-Find was created by .
          <br></br>
          <Box>
          <IconButton 
          //sx={
             justifyContent="left"
  }
          href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon">
        <img  src={linkedIn} width={30} height={20}  />
        
        <br></br>
        Rodney Nutall

      </IconButton>
      </Box>
      
      <Box>
      <IconButton
      
          href="https://www.linkedin.com/in/nigel-poblete?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon1">
        <img  src={linkedIn} width={40} height={40} />
        
        <br></br>
        Nigel Poblete
      </IconButton>
      </Box>
      
      <Box>
      <IconButton
          href="https://www.linkedin.com/in/aaron-flores?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D" className="icon2">
        <img  src={linkedIn} width={40} height={40} />
        <br></br>
        Aaron Flores
      </IconButton>
      </Box>
      
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;