import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import "./styles/fonts.css"
import "./styles/main.css"
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';

import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({

  uri: process.env.REACT_APP_GRAPHCMS_URL,

  cache: new InMemoryCache(),

});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
