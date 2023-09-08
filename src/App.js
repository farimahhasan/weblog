/* import { gql, useQuery } from "@apollo/client";

const QUERY = gql`
query {
  authors{
    name
  }
}
` 

function App() {
   const{loading,data}=useQuery(QUERY);
  console.log({loading,data}) 
  return (
      <div>hi</div>
  );
}

export default App;*/


import React from 'react';
import Home from './components/Home';
import Layout from './components/layout';
import AuthorPage from './components/AuthorPage';
import BlogPage from './components/BlogPage';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  return (
     <Layout>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/author/:slug' element={<AuthorPage />} />
        <Route path='/blog/:slug' element={<BlogPage />} />
      </Routes>
      </Layout>

  );
};

export default App;
