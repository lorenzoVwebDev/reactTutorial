import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';

//context imports
import { SaladContext } from '../SaladMaker/SaladMaker.js'

const useStyles = createUseStyles({
  list: {
    diplay: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeigth: 50,
    '& li': {
      width: 100
    }
  }, 
  wrapper: {
    borderTop: 'black solid 1px',
    display: 'flex',
    padding: 25
  }
});

function SaladSummary() {
  //SaladContext destructuring
  const { salad } = useContext(SaladContext)
  const classes = useStyles();

  return (
    <div className={classes.wrapper}> 
      <h2>Your Salad</h2>
      <ul className={classes.list}>
        {
          salad.map(ingredient => {
            return (
              <li key={ingredient.id}>{ingredient.name}</li>
            )
          })
        }
      </ul>
      </div>
    )
};

export default SaladSummary;