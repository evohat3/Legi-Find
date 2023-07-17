import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Auth from '../utils/auth';
import SavedSearches from '../components/SavedSearches';
import SearchPageLite from '../components/SearchByState';
import Grid from "@mui/material/Grid";
import 'animate.css';
import { useQuery } from '@apollo/client';
import { FIND_USER } from '../utils/queries';
import heroImage from '../components/assets/row-old-textbooks-fills-antique-bookshelf-generated-by-ai.jpg';
import { Paper } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

const styles ={ 
  paperContainer: {
    backgroundImage: `url(${heroImage})`
  }
}

export default function Dashboard() {
  const id = useParams();
  const navigate = useNavigate();
  const { loading, data } = useQuery(FIND_USER, {
    variables: { id: id.id },
  });

  console.log(data);

  const [showComponent, setShowComponent] = useState(false);
  const handleClick = () => {
    setShowComponent(true);
  };

  const isLoggedIn = Auth.loggedIn;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/'); // Redirect to home page if not logged in
    }
  }, [isLoggedIn, navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const savedBills = data?.findUser?.savedBills || [];
  const user = data?.findUser || {};

  const savedSearchData = savedBills.map(savedBill => ({
    billId: savedBill.billId,
    billNumber: savedBill.billNumber,
    changeHash: savedBill.changeHash,
    lastAction: savedBill.lastAction,
    lastActionDate: savedBill.lastActionDate,
    relevance: savedBill.relevance,
    researchUrl: savedBill.researchUrl,
    state: savedBill.state,
    textUrl: savedBill.textUrl,
    title: savedBill.title,
    url: savedBill.url
  }));

  return (
    <Paper sx={{height: 1300, }} style={styles.paperContainer}>
      <Box
        sx={{
          height: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Container sx={{ bgcolor: 'primary.main', color: 'white', height: 300, boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)' }} className='animate__animated animate__backInLeft'>
          <Typography  variant="h3" align="center">
            Welcome to Legi-Find {user.first}!
          </Typography>
          {showComponent ? (
            <Box
              className="animate__animated animate__backInRight"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid black",
              }}
            >
              {/* Render the SearchPageLite component here */}
              <SearchPageLite />
            </Box>
          ) : (
            <div>
              <Button
                className="animate__animated animate__backInRight animate__delay-3s"
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  background: 'black',
                  "&:hover": { backgroundColor: "white", color: "black" },
                }}
                onClick={handleClick}
              >
                Quick Search by State
              </Button> 
            </div>
          )}
        </Container>
        <Container>
          <Grid container spacing={6}>
            {savedSearchData.map((savedSearch) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={savedSearch.billId}>
                {/* Render the SavedSearches component here */}
                <SavedSearches savedSearch={savedSearch} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Paper>
  );
}
