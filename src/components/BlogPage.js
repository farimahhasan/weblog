import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { GET_POST } from "./graphQl/queries";
import { Avatar, Box, Grid, Typography , Container , CircularProgress } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { grey } from "@mui/material/colors";
import CommentForm from "./CommentForm";
import Comments from "./Comments";

const BlogPage = () => {
    const {slug} = useParams()
    const {loading , data } = useQuery(GET_POST , {variables:{slug}})
    const navigate = useNavigate();
    return (
        <>
        <div style={{ textAlign: "center" }}>
            {loading && <CircularProgress />}
        </div>
        {
            data &&
            <Container maxWidth="lg">
            <Grid container p={3}>
              <Grid item xs={12} mt={9} display="flex" justifyContent="space-between">
                <Typography
                  component="h5"
                  variant="h5"
                  color={grey[50]}
                  fontWeight={700}
                >
                  {data.post.title}
                </Typography>
                <ArrowBackRoundedIcon sx={{ color: grey[50] }} onClick={() => navigate(-1)} />
              </Grid>
              <Grid item xs={12} mt={6} textAlign={"center"}>
                <img
                  src={data.post.coverPhoto.url}
                  alt={data.post.slug}
                  width="100%"
                  style={{ borderRadius: 15 }}
                />
              </Grid>
              <Grid item xs={12} mt={7} display="flex" alignItems="center">
                <Avatar
                  src={data.post.author.avatar.url}
                  sx={{ width: 80, height: 80, marginLeft: 2 }}
                />
                <Box component="div">
                  <Typography component="p" variant="h5" fontWeight={700} color={grey[50]}>
                    {data.post.author.name}
                  </Typography>
                  <Typography component="p" variant="p" color={grey[50]}>
                    {data.post.author.field}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} mt={5}>
                <div id="content-blog"
                  dangerouslySetInnerHTML={{
                    __html: sanitizeHtml(data.post.content.html),
                  }}
                ></div>
              </Grid>
            </Grid>
            <CommentForm slug={data.post.slug} />
            <Comments slug={data.post.slug} />
          </Container>
        }
        </>
    );
};

export default BlogPage;