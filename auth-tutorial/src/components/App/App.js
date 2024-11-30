import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
//components
import Dashboard from '../Dashboard/Dashboard.js';
import Preferences from '../Preferences/Preferences.js';
import Login from '../Login/Login.js';
import useToken from './useToken.js';

/* function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
};
 */
function App() {
//  const [ token, setToken ] = useState(); state saving token method
/*   const token = getToken() */
  const { token, setToken} = useToken();


  if (!token) {
    return <Login setToken={setToken}/>
  };

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard'element={<Dashboard/>}/>
          <Route path='/preferences'element={<Preferences/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
