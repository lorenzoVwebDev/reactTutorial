import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails.js'
import Card from '../Card/Card.js' 

function AnimalCard({
 name, size, ...props
}) {
  return (
  <Card title="animal" details={<AnimalDetails 
    {...props}/>}>
    <div >
      <h3>{name}</h3>
      <div>{size}kg</div>
    </div>
  </Card>
  ) 
};

AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired
}

export default AnimalCard;