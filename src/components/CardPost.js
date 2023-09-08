import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardPost=({ title, slug, coverPhoto, author })=> {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px"}} >
      {author && (
        <CardHeader
          avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />}
          title={
            <Typography component="p" variant="p" color="text.secondary" sx={{fontSize:".8em"}} fontWeight={900}>
              {author.name}
            </Typography>
          }
        />
      )}

      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="p"
          variant="p"
          color="text.primary"
          fontWeight={600}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blog/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        > 
          <Button
            variant="contained"
            size="small"
            sx={{ width: "100%" }}
            className="btn"
          >
            مطالعه مقاله
          </Button>
       </Link> 
      </CardActions>
    </Card>
  );
}

export default CardPost;