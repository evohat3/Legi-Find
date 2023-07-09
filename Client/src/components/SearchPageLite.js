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
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: 300,


        }}> 

       <Box alignItems="center"
            
            width='80%'
            textAlign={'center'}
            alignContent={'center'}
            justifyContent={'center'}

            backgroundColor= 'white'
            sx={{border: 3, borderColor: 'black', height: 500}}> 
            
            <Typography>
                HELLO
            </Typography>
                        

       </Box>

            <Grid
                width= '80%'
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                backgroundColor= 'white'
                sx={{border: 3, borderColor: 'black', height: 500}}
                
                >
                
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Enter your search here" sx={{backgroundColor: 'white', color: 'black', '&:hover': { border:1, borderColor: 'white', color: 'white' }}}/>
                </Grid>

                
                <Grid item xs={12}>
                <TextField id="outlined-basic" label="Enter Session Number Here" sx={{backgroundColor: 'white', color: 'black', '&:hover': { border:1, borderColor: 'white', color: 'white' }}}/>
                </Grid>

                <Grid item xs={6}>
                <SelectSearchTypeDropdown />
                </Grid>
                
                
                <Grid item xs={6}>
                    <Button sx={{ width: 100, border:1, borderColor: 'black', color: 'black' }}>Search</Button>
                </Grid> 

            </Grid>
            
        </Box>
    )
}