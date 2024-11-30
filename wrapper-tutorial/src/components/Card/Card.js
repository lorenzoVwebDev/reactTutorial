import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

function Card({ children, details, title}) {
  return (
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
      </div>
      {children}
      {details}
    </div>
  )
};

Card.propTypes = {
  children : PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element.isRequired]),
  title: PropTypes.string.isRequired
};

Card.defaultProps = {
  details: null
};

export default Card;