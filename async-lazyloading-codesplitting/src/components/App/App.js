import React, { lazy, Suspense, useReducer, useState } from 'react';
import './App.css';
/* import RiverInformation from '../RiverInformation/RiverInformation.js';
 */ 
const RiverInformation = lazy(() => import(/* webpackChunckName: 'RiverInformation*/ '../RiverInformation/RiverInformation'));

function App() {
  const [ riverName, setRiverName ] = useState('nile');
  const [show, toggle] = useReducer(state => !state, true)

  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <div><button onClick={toggle}>Toggle Details</button></div>
        <button onClick={() => { setRiverName('nile')}}>Nile</button>
        <button onClick={() => { setRiverName('amazon')}}>Amazon</button>
        <button onClick={() => { setRiverName('yangtze')}}>Yangtze</button>
        <button onClick={() => { setRiverName('mississipi')}}>Mississipi</button>
        <Suspense fallback={<div>Loading Component</div>}>
        {show && <RiverInformation 
          name={riverName}
        />}
        </Suspense>
    </div>
  );
};

export default App;
