import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import 'animate.css';
import Switch from '@mui/material/Switch';


function ResponsiveAppBar() {

  const pages = [ 'Dashboard','Home','Search', 'News', 'SignUp', 'Login',];
const settings = ['Profile', 'Account', 'Home' ,'Search', 'News', 'SignUp', 'Login', 'Dashboard', 'Logout',];

  const isLoggedIn = Auth.loggedIn();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary', border: 1, borderColor: 'text.primary' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className='animate__animated animate__backInLeft animate__delay-1s'>
            <AdbIcon className='animate__animated animate__bounce animate__delay-3s' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </div>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className='animate__animated animate__flip animate__delay-1s'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Legi-Find
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => {
        if ((page === 'SignUp' || page === 'Login' || page === 'Home') && isLoggedIn) {
          // Skip rendering "SignUp" and "Login" if user is logged in
          return null;
        }
        if (page === 'Dashboard' && !isLoggedIn) {
          // Skip rendering "Dashboard" if user is not logged in
          return null;
        }
        return (
                    <MenuItem
                      key={page}
                      onClick={handleCloseNavMenu}
                      component={Link}
                      to={
                        page === 'Home' ? '/' : 
                        page === 'Search' ? '/search' : 
                        page === 'Login' ? '/login' : 
                        page === 'SignUp' ? '/signup' :
                        page === 'Dashboard' ? '/dashboard' :
                         undefined}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                      );
      })}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} className='animate__animated animate__bounce animate__delay-2s' />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            className='animate__animated animate__flip animate__delay-1s'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Legi-Find
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => {
        if ((page === 'SignUp' || page === 'Login' || page === 'Home') && isLoggedIn) {
          // Skip rendering "SignUp" and "Login" if user is logged in
          return null;
        }
        if (page === 'Dashboard' && !isLoggedIn) {
          // Skip rendering "Dashboard" if user is not logged in
          return null;
        }
        return (
          <Button
            className='animate__animated animate__backInLeft animate__delay-1s'
            key={page}
            onClick={handleCloseNavMenu}
            component={Link}
            
            to={
              page === 'Home' ? '/' :
              page === 'Search' ? '/search' :
              page === 'News' ? '/news' :
              page === 'Login' ? '/login' :
              page === 'SignUp' ? '/signup' :
              page === 'Dashboard' ? '/dashboard' :
              undefined
            }
            sx={{
              my: 2,
              color: 'white',
              display: 'block',
              '&:hover': { backgroundColor: 'white', color: 'black', class: 'animate__animated animate__bounce' },
            }}
          >
            {page}
          </Button>
        );
      })}
    </Box>

    <Switch defaultChecked />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  className='animate__animated animate__backInRight'
                  alt="Remy Sharp"
                  src="https://i.imgur.com/IAj05FO.png"
                  sx={{ border: 3, color: 'primary.' }}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => {
        if ((setting === 'Profile' || setting === 'Login' || setting === 'Home' || setting === 'SignUp') && isLoggedIn) {
          // Skip rendering "SignUp" and "Login" if user is logged in
          return null;
        }
        if ((setting === 'Dashboard' || setting === 'Profile' || setting === 'Account' || setting === 'Logout') && !isLoggedIn) {
          // Skip rendering "Dashboard" if user is not logged in
          return  (setting === 'Home'|| setting === 'Search' || setting === 'News' || setting === 'SignUp' || setting === 'Login')
        }
        return (
                <MenuItem
                  key={setting}
                  onClick={() => {
                    handleCloseUserMenu();
                    if (setting === 'Logout') {
                      Auth.logout(); // Call the logout function from auth.js
                    }
                  }}
                  component={
                    setting === 'Account' || 
                    setting === 'Dashboard' || 
                    setting === 'Logout' || 
                    setting === 'SignUp' || 
                    setting === 'Home'||
                    setting === 'Search' ||
                    setting === 'News' ||
                    setting === 'SignUp' ||
                    setting === 'Login'
                    
                    ? Link : 'button'
                  }
                  to={
                    setting === 'Account' ? '/account' :
                    setting === 'Dashboard' ? '/dashboard' :
                    setting === 'Logout' ? '/' : 
                    setting === 'Login' ? '/login' :
                    setting === 'SignUp' ? '/signup' :
                    setting === 'News' ? '/news' :
                    setting === 'Search' ? '/search' :
                    setting === 'Home' ? '/' : undefined
                  }
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
