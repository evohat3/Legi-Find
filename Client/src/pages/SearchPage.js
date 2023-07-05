import React from 'react'
import TextField  from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import SearchResults from '../components/SearchResults'
import { getSearchState, getSearchSession} from '../utils/API'
import SelectSearchTypeDropdown from '../components/SelectSearchTypeDropdown'

export default function Search() {
    return (
        <Box 
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
                
                <Grid xs={7} justifyContent={'left'}>
                    <TextField style = {{width: '100%'}} id="outlined-basic" label="Enter your search here" variant="outlined" size="lg"/>
                </Grid>
                
                
                <SelectSearchTypeDropdown xs={4}></SelectSearchTypeDropdown>
                <Grid xs={1}>
                    <Button sx={{border:1}}>Search</Button>
                </Grid>
                <Grid xs={7} justifyContent={'left'}>
                <TextField style = {{width: '100%'} } id="outlined-basic" label="Enter Session Number Here" variant="outlined" size="lg"/>
                </Grid>
                
                <Grid xs={1} justifyContent={'left'}>
                    <Button sx={{border:1}}>Search</Button>
                </Grid>
            </Grid>  
            <SearchResults></SearchResults>
        </Box>
    )
}