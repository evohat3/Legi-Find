import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';

import SearchPageLite from '../components/SearchByState';
import 'animate.css';
// this is the query function that will find a user object
import {FIND_USER} from '../utils/queries'
// we use these to invoke either the mutations or quieries to send to our graphql
import { useMutation, useQuery } from '@apollo/client';
import heroImage from '../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg'
import { Paper } from '@mui/material';
// we can use link to navigate to future components/pages
// import { Link } from '@mui/material/Link'
import {useParams} from 'react-router-dom'
//The useNavigate will automatically navigate to what ever route you put it
//when it is rendered
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";



const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function Dashboard() {

const {id} = useParams()
console.log(id)

  // this state will set state of either showing the search box
  // or the quick search button
  const [showComponent, setShowComponent] = useState(false);

// this is the function that toggles the state on click 
   const handleClick = () => {
    setShowComponent(true);
  };
// Auth.logged in returns true if your logged in or false if not
// put that data to a variable caled isLoggedin
const isLoggedIn = Auth.loggedIn
// invoked the useNavigate and pointed it to the navigate variable
  const navigate = useNavigate();



  if (!isLoggedIn) {
    navigate('/'); // Redirect to 'if not logged in
  } 

    
   

    return (
      
      <Paper style={styles.paperContainer}>
      <Box
        sx={{
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container sx={{ bgcolor: 'primary.main', color: 'white', height: 500, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInLeft'>
          <Typography  variant="h3" align="center" >
            Welcome to Legi-Find! 
            

            
          </Typography>
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

          
        </Container>

        <Container variant="h3" backgroundcolor="black" color="white" align="center">
          Welcome
        </Container>
      </Box>
      </Paper>
      
    );
  }

