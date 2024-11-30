import React, { useReducer, createContext } from 'react';
import {createUseStyles} from 'react-jss';
import SaladBuilder from '../SaladBuilder/SaladBuilder.js';
import SaladSummary from '../SaladSummary/SaladSummary.js'

const useStyles = createUseStyles ({
  wrapper: {
    textAlign: 'center'
  }
});

export const SaladContext = createContext();

function reducer(state, item) {
  return [...state, item]
};

function SaladMaker() {
  const classes = useStyles();
  const [salad, setSalad] = useReducer(reducer, [])
  return (
    <SaladContext.Provider value={{ salad, setSalad }}>
      <h1 className={classes.wrapper}>
        <span role='img' aria-label='salad'>🥗</span>
        Build Your Custom Salad!
        <span role='img' aria-label='salad'>🥗</span>
      </h1>
      <SaladBuilder/>
      <SaladSummary/>
    </SaladContext.Provider>
  )
};

export default SaladMaker;