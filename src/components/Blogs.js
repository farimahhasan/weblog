import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from './graphQl/queries';
import { CircularProgress , Grid } from '@mui/material';
import CardPost from './CardPost';

const Blogs = () => {
    const { loading, data } = useQuery(GET_BLOGS_INFO)
    return (
        <>
            {loading && <CircularProgress />}
            <Grid container spacing={2} >
                {data && data.posts.map(post => (
                    <Grid key={post.id} item xs={12} sm={6} md={4}>
                        <CardPost {...post}/>
                    </Grid>
                ))}
            </Grid >

        </>
    );
};

export default Blogs;