import React from 'react';
import './App.css';
import AnimalCard from '../AnimalCard/AnimalCard.js';
import data from './data.js';

function App() {
  return (
    <div className='wrapper'>
      {
        data.map(animal => {
          return <AnimalCard
            diet={animal.diet}
            key={animal.name}
            name={animal.name}
            size={animal.size}
            scientificName={animal.scientificName}
          />
        })
      }

    </div>
  )
}
 
export default App;
