import React, { useState }from 'react'
import TextField  from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SearchResults from '../components/SearchResults'

import SelectSearchTypeDropdown from '../components/SelectSearchTypeDropdown'
import 'animate.css';



export default function Search() {

    const [userSearchData, setUserSearchData] = useState({search:'', stateName: 'all'})
    
    const handleSearchChange = async (event) => {
        const {
            target: { value },
          } = event;
        setUserSearchData(value)
        console.log(userSearchData)
    }

    const handleDropdownChange = async (event) => {
        const {
            target: { value },
          } = event;
          setUserSearchData.stateName(value)
          console.log(userSearchData)
    }
    const handleSubmit = async (event) => {
        console.log(userSearchData)
    }
    return (
        <Box  className='animate__animated animate__backInRight'
            sx={{
                
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

        }}> 
            <Grid
                width= '80%'
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{border: 1,
                    }}
            >
                
                <Grid 
                component="form" 
                xs={7} 
                justifyContent={'left'}
                >
                    <TextField 
                    style = {{width: '100%'}} 
                    onChange={handleSearchChange}
                    id="outlined-basic" 
                    label="Enter your search here" 
                    variant="outlined" 
                    size="lg"/>
                </Grid>
                
                
                <Grid xs={4} >
                    <SelectSearchTypeDropdown ></SelectSearchTypeDropdown> 
                </Grid>
                <Grid xs={1} justifyContent={'right'} >
                    <Button>test</Button>
                </Grid>
            </Grid> 
                <SearchResults></SearchResults>
        </Box>
    )
}

//on line 48 do on click event, make function that handles on sear

// () : ()

// if x is true render this block, if false render other block

//<Grid xs={1}>
{/* <Button onClick={handleSubmit} sx={{border:1} }>Search</Button>
</Grid> */}