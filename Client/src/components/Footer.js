import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import linkedIn from "./assets/LI-In-Bug.png";
import "../index.css";

const Footer = () => {
  return (
    <footer backgroundColor="primary">
      <Box
        width="80%"
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton>
              size="large" margin= "center" onClick={linkedIn}
              color="inherit" variant="h6" align="center"
            </IconButton>
            This project was created by.
            <Box>
              <button>
                <a
                  href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
                  className="icon"
                >
                  <img src={linkedIn} width={30} height={30} />
                </a>
                <br></br>
                Rodney Nutall
              </button>
            </Box>
            <Box>
              <button>
                <a
                  href="https://www.linkedin.com/in/nigel-poblete?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
                  className="icon"
                >
                  <img src={linkedIn} width={30} height={30} />
                </a>
                <br></br>
                Rodney Nutall
              </button>
            </Box>
            <Box>
              <button>
                <a
                  href="https://www.linkedin.com/in/rodney-nutall?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2FYnmq%2FjJTg2DHKUbE0eWKw%3D%3D"
                  className="icon"
                >
                  <img src={linkedIn} width={30} height={30} />
                </a>
                <br></br>
                Rodney Nutall
              </button>
            </Box>
          </Box>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
