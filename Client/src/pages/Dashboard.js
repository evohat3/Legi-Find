import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { FIND_USER } from '../utils/queries';
import SearchPageLite from '../components/SearchByState';
import 'animate.css';

import heroImage from '../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg'
import { Paper } from '@mui/material';
import { Link } from '@mui/material/Link'
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";



const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function Dashboard() {
  const [showComponent, setShowComponent] = useState(false);
   const handleClick = () => {
    setShowComponent(true);
  };

const isLoggedIn = Auth.loggedIn

  const navigate = useNavigate();

  // const userprof = Auth.getProfile();
  // const userdata = userprof.data;
  // const email = userdata.email;

  // console.log(isLoggedIn)

  if (!isLoggedIn) {
    navigate('/'); // Redirect to 'if not logged in
  } 
    // console.log(Auth.getUser())

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
          <Typography  variant="h3" align="center">
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

//   if (error) {
//     console.error(err);
//     return <p>Error occurred while fetching user data.</p>;
//   }
  
//   const user = data.findUser;

//   const userEmail = user.email;

//   return (

   
//     <Box
//       sx={{
//         height: 600,
//         width: '100%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Container
//         sx={{
//           bgcolor: 'green',
//           color: 'white',
//           height: 500,
//           boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
//         }}
//         className='animate__animated animate__backInLeft'
//       >
        
//         <Typography variant="h3" align="center">
//           Welcome to Legifind {userEmail}!
//         </Typography>
//         <SearchPageLite />
//       </Container>

//       <Container variant="h3" backgroundcolor="black" color="white" align="center">
//         Welcome
//       </Container>

//     </Box>
//   );
// }
