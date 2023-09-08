import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_COMMENTS } from './graphQl/queries';
import { CircularProgress, Grid , Typography , Avatar , Box } from '@mui/material';
import { grey } from '@mui/material/colors';

const Comments = ({ slug }) => {
    const { loading, data } = useQuery(GET_COMMENTS, { variables: { slug } })
    return (
        <>
            <div style={{ textAlign: "center" }}>
                {loading && <CircularProgress />}
            </div>
            {
                data &&

                <Grid
                container
                sx={{
                  boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
                  borderRadius: 4,
                  py: 1,
                  mt: 8,
                  justifyContent:"center"
                }}
              >
                <Grid item xs={12} sm={8} md={6} m={2} >
                  <Typography textAlign="center" component="p" variant="h6" fontWeight={700} color={grey[50]}>
                    کامنت ها
                  </Typography>
                  {data.comments.map((comment) => (
                    <Grid
                      item
                      xs={12}
                      key={comment.id}
                      m={2}
                      p={2}
                      border="1px silver solid"
                      borderRadius={1}
                    >
                      <Box component="div" display="flex" alignItems="center" mb={3}>
                        <Avatar>{comment.name[0]}</Avatar>
                        <Typography component="span" variant="p" fontWeight={700} mr={1} color={grey[50]}>
                          {comment.name}
                        </Typography>
                      </Box>
                      <Typography component="p" variant="p" color={grey[50]}>
                        {comment.text}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>  
            }
        </>
    );
};

export default Comments;