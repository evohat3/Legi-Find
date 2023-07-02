import * as React from 'react'
import Typography  from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SearchResults from '../components/SearchResults'

export default function LogOut() {
    return (
        <Box    
            sx={{
                width: '100%',
                height: '100%',

        }}> 
            <Grid
                
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"

            >

            <Typography variant='h4'>
                <div>Search</div>
            </Typography>     
            
            <TextField id="outlined-basic" label="Outlined" variant="outlined" /> 
            </Grid>  
            <SearchResults></SearchResults>
        </Box>
    )
}