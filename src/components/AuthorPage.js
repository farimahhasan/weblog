import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR } from './graphQl/queries';
import { CircularProgress, Card, Box, CardContent, Typography, CardMedia , Grid , Container } from '@mui/material';
import sanitizeHtml from 'sanitize-html';
import CardPost from './CardPost';
import { grey } from '@mui/material/colors';


const AuthorPage = () => {
    const { slug } = useParams()
    const { loading, data} = useQuery(GET_AUTHOR, { variables: { slug } })
    return (
        <>
            <div style={{ textAlign: "center" }}>
                {loading && <CircularProgress />}
            </div>
            {
                data &&
                <Container maxWidth="lg" >
                <Card  sx={{ display: 'flex', width: { xs: "80%", sm: "80%", md: "50%" }, margin: "30px auto" }}>
                    <div className='gradiant'></div>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={data.author.avatar.url}
                        alt={slug}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' ,justifyContent:"start" }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {data.author.name}
                            </Typography>
                            <Typography variant="subtitle1"  component="div">
                                {data.author.field}
                            </Typography>
                        </CardContent>
                        <div style={{padding:"15px"}} dangerouslySetInnerHTML={{__html: sanitizeHtml(data.author.description.html)}} sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        </div>
                    </Box>
                </Card>
                <Typography p={3} color={grey[50]} component="h5" variant="h5">
                     مقالات {data.author.name}
                </Typography>
                <Grid container spacing={2} p={3}>
                   {data.posts.map(post=>(
                     <Grid item key={post.id} xs={12} sm={6} md={4}>
                        <CardPost title={post.title} coverPhoto={post.coverPhoto} slug={post.slug} />
                     </Grid>
                   ))}
                </Grid>
                </Container>
            }
        </>
    );
};

export default AuthorPage;