import React from 'react'
import { Typography } from '@material-ui/core'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'



export default function Home() {
    return (
            <Box sx={{ height: 600, width: '100%', display: 'flex', justifyContent: 'center',alignItems: 'center',}} >
                <Container sx={{ bgcolor: 'primary.main'}}>
                    <Typography   
                        variant='h3'
                        align='center'>
                        Welcome To Legi-Find!
                    </Typography>
                </Container>



                <Container 
                backgroundColor="black"
                color="white"
                align="center"
                >
                    Hello
                </Container>


            </Box>
    )
}