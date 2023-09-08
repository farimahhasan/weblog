import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query {
  posts {
    author {
      name
      avatar {
        url
      }
    }
    id
    slug
    title
    coverPhoto {
      url
    }
  }
}

`

const GET_AUTHORS = gql `
query {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}

`

const GET_AUTHOR = gql `
query getAuthor($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
  }
  posts {
    title
    coverPhoto {
      url
    }
    slug
    id
  }
}

`

const GET_POST=gql`
query getPost($slug:String!) {
  post(where: {slug: $slug}) {
    id
    slug
    title
    content {
      html
    }
    coverPhoto {
      url
    }
    author {
      id
      name
      field
      avatar {
        url
      }
    }
  }
}
` 
const GET_COMMENTS= gql `
query getComments($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}

`

export {GET_BLOGS_INFO , GET_AUTHORS , GET_AUTHOR , GET_POST , GET_COMMENTS}