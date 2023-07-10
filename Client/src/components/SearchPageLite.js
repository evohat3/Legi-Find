import React from 'react'
import TextField  from '@mui/material/TextField'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
// import { getSearchState, getSearchSession} from '../utils/API'
import SelectSearchTypeDropdown from '../components/SelectSearchTypeDropdown'
// import { borderColor, height, textAlign, width } from '@mui/system'
import { Typography } from '@mui/material'

export default function Search() {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300,


        }}> 

       <Box alignItems="center"
            
            width='80%'
            backgroundColor= 'white'
            sx={{border: 3, borderColor: 'black',}}> 
            
            <Typography variant='h4' align='center'>
                Search By State
            </Typography>
                        

       </Box>

            <Grid
                width= '80%'
                container
        
                alignItems="center"
                justifyContent="center"
                backgroundColor= 'white'
                sx={{border: 3, borderColor: 'black', height: 500}}
                >
            

                <Grid item xs={12}>
                <SelectSearchTypeDropdown />
                </Grid>
                
                
                <Grid item xs={12}>
                    <Button sx={{ border:1, borderColor: 'black', color: 'black' }}>Search</Button>
                </Grid> 

            </Grid>
            
        </Box>
    )
}