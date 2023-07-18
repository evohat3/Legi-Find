import React from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container} from "@mui/system";

const SavedSearches = ( {savedSearch} ) => {
console.log(savedSearch)
return (
  <div>

      <Card 
      key={savedSearch.billId} sx={{marginTop: 2,}}
      >
        <CardContent>

          <Typography variant="h5" component="div">
            {savedSearch.billNumber}
          </Typography>
          
          <Typography variant="body2">
            {savedSearch.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={savedSearch.url} target="_blank">Learn More</Button>
          <Button sx={{alignContent: 'center'}}> DELETE</Button>
          <Container sx={{ bgcolor: 'primary.main', color: 'white', height: 50, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInLeft'>
            <Typography align='center'sx={{bgcolor: 'black'}} >STATE:</Typography>
            <Typography align='center' sx={{bgcolor: 'primary.main'}} >{savedSearch.state}</Typography>
            </Container>
        </CardActions>
      </Card>
  </div>
);

}

export default SavedSearches;