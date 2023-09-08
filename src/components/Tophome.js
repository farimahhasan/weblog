import React from 'react';
import { Container, Grid, Typography  } from '@mui/material';
import headerImg from '../images/header.png'
import { grey } from '@mui/material/colors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Button from "@mui/material/Button";

const Tophome = () => {
  return (

      <Container maxWidth="lg" id="header" >
        <Grid container spacing={2} p={3}  alignItems="center">
          <Grid item xs={12} sm={5} md={6}
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'right',
                md: 'right',
              },
            }}>
            <h1>
              وبلاگ
            </h1>
            <Typography variant='h6' fontWeight={900} color={grey[50]} mb={3}>
              بهترین مقالات اینجاست . یادت نره نظر بنویسی .
            </Typography>
            <Button className='btn' variant="contained" href="#blogs-authors" color="secondary"  >
              بزن بریم
              <KeyboardArrowDownIcon sx={{marginRight:'10px'}} />
            </Button>
          </Grid>
          <Grid item xs={12} sm={7} md={6}
          sx={{
            marginTop: {
              xs: '20px',
              sm: '20px',
              md: '0',
            },
          }}
          >
            <img src={headerImg} alt='avatar' />
          </Grid>
        </Grid>
      </Container>
  );
};

export default Tophome;