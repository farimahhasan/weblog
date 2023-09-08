import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from './graphQl/queries';
import { CircularProgress, Typography , Avatar, Divider , Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Authors = () => {
  const { loading, data } = useQuery(GET_AUTHORS)
  return (
    <>
      {loading && <CircularProgress />}
      <Grid
        container
        sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",backgroundColor:"#ffff" }}
      >
        {data && data.authors.map((author, index) => (
          <React.Fragment key={author.id}>
            <Grid item xs={12} padding={2} >
             <Link
                to={`/author/${author.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              > 
                <Avatar src={author.avatar.url} sx={{ marginLeft: 2 }} />
                <Typography component="p" variant="p" color="text.secondary"  sx={{fontSize:".8em"}} fontWeight={900}>
                  {author.name}
                </Typography>
              </Link> 
            </Grid>
            {index !== data.authors.length - 1 && (
              <Grid item xs={12}>
                <Divider variant="middle" />
              </Grid>
            )}
          </React.Fragment>
        ))}
      </Grid>


    </>
  );
};

export default Authors;