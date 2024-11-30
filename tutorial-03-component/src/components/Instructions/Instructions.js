import React from 'react';
import emoji from './emoji.svg'
import './Instructions.css'

export default function Instructions() {
  return ( 
  <div className="Instructions">
    <img alt='laughing crying emoji' src={emoji} />
    <p>Click on an emoji to view the moji short name.</p>
  </div>
  )
}; 