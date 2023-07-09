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

    return (
      <AppBar position="static"   > 
      <Toolbar>
<div className='animate__animated animate__backOutRight animate__delay-5s'>
<Typography className='animate__animated animate__backInRight animate__delay-1s'>
          You Are Now Logged in!
        </Typography>

</div>


      </Toolbar>
    </AppBar>
    )

  }


  }



export default Header;





