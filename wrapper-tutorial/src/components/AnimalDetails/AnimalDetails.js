import React from 'react';
import PropTypes from 'prop-types';
import './AnimalDetails.css';


function convertFood(food) {
  switch(food) {
    case 'insects':
      return '🐜';
    case 'meat':
      return '🍖';
    case 'plants':
      default: 
      return '🌱'
  }
}

function AnimalDetails(props) {
  return (
    <div className='details'>
      <h4>Details:</h4>
      <div>
        Diet: {props.diet.map(food => convertFood(food))}
      </div>
      <div>
        scientific name: {props.scientificName}
      </div>
    </div>
  )
}

AnimalDetails.propTypes = {
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  scientificName: PropTypes.string.isRequired
}

export default AnimalDetails;