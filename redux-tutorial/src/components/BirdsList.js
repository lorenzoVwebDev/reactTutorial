import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementView,addBird } from '../slices/birdsSlices.js';

function BirdList() {
  const birds = useSelector((state) => state.birds);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Birds</h1>
      <ul>
        {birds.map((bird, index) => (
          <li key={index}>
            {bird.name}: {bird.views} views
            <button onClick={() => dispatch(incrementView({ name: bird.name }))}>
              Increment View
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addBird({ name: 'sparrow', views: 0 }))}>
        Add Sparrow
      </button>
    </div>
  );
};

export default BirdList;