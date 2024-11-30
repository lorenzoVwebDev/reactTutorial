import React from 'react';
import { useLocation, useParams, useMatch, Routes, Route, BrowserRouter } from 'react-router-dom';
//components
import Beluga from './Beluga.js';
import Blue from './Blue.js';

function Whale() {
//search parameters
/*   const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1]; */
//url parameters
/*   const { type } = useParams();
  const params = useParams(); */


  return (
    <>
      <h2>Whale</h2>
      <Routes>
        <Route path="beluga" element={<Beluga />} />
        <Route path="blue" element={<Blue />} />
      </Routes>
    </>
  );
  
};

export default Whale;
