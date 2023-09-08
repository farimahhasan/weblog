import React from 'react';
import logo from '../../images/logo.svg'
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header mt={3}>
      <Container maxWidth="lg" >
        <Grid container spacing={2} p={3} mt={1}>
          <Grid item md={12} sm={12} xs={12}
            sx={{
              textAlign: {
                xs: 'center',
                sm: 'right',
                md: 'right',
              },
            }}
          >
            <Link to='/'>
            <img src={logo} alt='logo' />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};

export default Header;