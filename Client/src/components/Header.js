import React from 'react';
import AppBar  from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Auth from '../utils/auth'
import { Typography } from '@mui/material';
import 'animate.css';



const Header = () => {

  const isLoggedIn = Auth.loggedIn()

  if (!isLoggedIn) {
    return (
      <AppBar position="static"  > 
        <Toolbar>
        <div className='animate__animated animate__backOutRight animate__delay-5s'>
          <Typography className='animate__animated animate__backInRight animate__delay-2s'>
            Signup or Login To Save Searched to your profile!
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    ); 
  } else if (isLoggedIn) {
    const userdata = Auth.getUser()

    const user = userdata.user.data
  
    return (
      <AppBar position="static"   > 
      <Toolbar>
<div className='animate__animated animate__backOutRight animate__delay-5s'>
<Typography align="center" className='animate__animated animate__backInRight animate__delay-1s'></Typography>
   <Typography
    className='animate__animated animate__bounce animate__delay-2s' >{user.email}
    </Typography> You Are Now Logged in!



</div>


      </Toolbar>
    </AppBar>
    )

  }


  }



export default Header;





