import React from 'react';
import Alert from '../Alert/Alert.js';
import CartSuccess from '../CartSuccess/CartSuccess.js'
const reactJss = require('react-jss');

const { createUseStyles } = reactJss

const useStyles = createUseStyles({
  wrapper: {
    padding: 20
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Alert title="Items Not Added" type="error">
        Your Items are out of stock.
      </Alert>
      <CartSuccess />
    </div>
  )
}

export default App;
