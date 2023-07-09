import * as React from "react";
import "../index.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import linkedIn from "./assets/LI-In-Bug.png";

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#1c54b2", textAlign: "center" }}
    >
      <Typography variant="h6" >
        Legi-Find was created by .
      </Typography>
      <Container maxWidth="xl" style={{ display: "flex", justifyContent:'space-between', alignItems: 'center' }}>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
            // className="icon"
          >
            <img src={linkedIn} width={40} height={40} />

            <h6>Rodney Nutall</h6>
          </IconButton>
        </Box>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/nigel-poblete?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
            // className="icon1"
          >
            <img src={linkedIn} width={40} height={40} />
           
            <h6>Nigel Poblete</h6> 
          </IconButton>
        </Box>
        <Box>
          <IconButton
            href="https://www.linkedin.com/in/aaron-flores?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
            // className="icon2"
          >
            <img src={linkedIn} width={40} height={40} />

            <h6>Aaron Flores</h6>
          </IconButton>
        </Box>
      </Container>
    </Container>
  );
};

export default Footer;
