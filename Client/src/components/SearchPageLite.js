import React from 'react'
import TextField  from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
// import { getSearchState, getSearchSession} from '../utils/API'
import SelectSearchTypeDropdown from '../components/SelectSearchTypeDropdown'
import { borderColor, height } from '@mui/system'

export default function Search() {
    return (
        <Box 
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 200,


        }}> 
            <Grid
                width= '80%'
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
                backgroundColor= 'white'
                sx={{border: 3, borderColor: 'black', height: 250}}
                
                >
                
                <Grid xs={6}>
                    <TextField id="outlined-basic" label="Enter your search here" sx={{backgroundColor: 'white', color: 'black', '&:hover': { border:1, borderColor: 'white', color: 'white' }}}/>
                </Grid>
                
                
                <SelectSearchTypeDropdown xs={4}></SelectSearchTypeDropdown>
                <Grid xs={10}>
                <TextField id="outlined-basic" label="Enter Session Number Here" sx={{backgroundColor: 'white', color: 'black', '&:hover': { border:1, borderColor: 'white', color: 'white' }}}/>
                </Grid>
                
                <Grid xs={10} alignContent={'start'}>
                    <Button sx={{ width: 100, border:1, borderColor: 'black', color: 'black' }}>Search</Button>
                </Grid>
            </Grid>  
        </Box>
    )
}