import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Tophome from './Tophome';
import Authors from './Authors';
import Blogs from './Blogs';
import { grey } from '@mui/material/colors';


const Home = () => {
  return (
    <>
      <Tophome />
      <Container maxWidth="lg" id="blogs-authors" >
        <Grid container spacing={2} p={3} mt={3}>
          <Grid item xs={12} md={3}>
            <Typography mb={3} component="h3" variant="h6" fontWeight="600" color={grey[50]} >
              نویسنده ها
            </Typography>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography mb={3} component="h3" variant="h6" fontWeight="600" color={grey[50]}>
              مقالات
            </Typography>
            <Blogs />
          </Grid>
        </Grid>

      </Container>
    </>
  );
};

export default Home;