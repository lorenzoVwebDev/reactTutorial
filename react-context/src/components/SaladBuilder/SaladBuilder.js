import React from 'react';
import SaladItem from '../SaladItem/SaladItem.js';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: [10, 50],
    justifyContent: 'center'
  }
});

const ingredients = [
  {
    image: '🍎',
    name: 'apple',
  },
  {
    image: '🥑',
    name: 'avocado',
  },
  {
    image: '🥦',
    name: 'broccoli',
  },
  {
    image: '🥕',
    name: 'carrot',
  },
  {
    image: '🍷',
    name: 'red wine dressing',
  },
  {
    image: '🍚',
    name: 'seasoned rice',
  },
];

function SaladBuilder() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      {
        ingredients.map(ingredient => {
          return (
            <SaladItem
              key={ingredient.name}
              image={ingredient.image}
              name={ingredient.name}
            />
          )
        })
      }
    </div>
  )
}

export default SaladBuilder;