import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Auth from "../utils/auth";
import { Navigate } from 'react-router-dom';
import { Paper } from "@mui/material";
import SearchPageLite from "../components/SearchByState";
import Grid from "@mui/material/Grid";
import "animate.css";
import Button from "@mui/material/Button";

import heroImage from "../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg";


const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function Home() {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };

  const isLoggedIn = Auth.loggedIn();

  // console.log(isLoggedIn);

  if (!isLoggedIn) {
    return (

      <Paper style={styles.paperContainer}>
      <Box
        
        sx={{
          height: 700,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"        
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "primary.main",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.2)",
          }}
          className="animate__animated animate__backInRight"
        >
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{backgroundImage:{heroImage}}}
            
          >
            
            <Grid item xs={12} sm={6} md={4}>
              
              <Box height={300}>
                <Typography
                  variant="h3"
                  align="center"
                  className="animate__animated animate__bounce animate__delay-2s"
                >
                  Welcome To Legi-Find!
                </Typography>
              </Box>
             
            </Grid>
             
            <Grid item xs={12} sm={6} md={4}>
            {showComponent ? (
                
                <Box
                className="animate__animated animate__backInRight"
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid black",

                  }}
                >
                  <SearchPageLite />
                </Box>
              
            ) : (
              <div>
              <Button
                className="animate__animated animate__backInRight animate__delay-3s"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: 'black',
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}
                onClick={handleClick}
              >
                Quick Search by State
              </Button> 
               {/* Render the button when showComponent is false */}
              {/* <Button
              className="animate__animated animate__backInRight animate__delay-4s"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                background: 'black',
                "&:hover": { backgroundColor: "white", color: "black" },
              }}
              onClick={handleClick}
            >
              Quick Search by Bill ID
            </Button> */}
            </div>
            )}
            </Grid>
          </Grid>
           
        </Container>
        
      </Box>
      </Paper>
    );
  } 


  return <Navigate to="/dashboard" replace={true} />;
}
