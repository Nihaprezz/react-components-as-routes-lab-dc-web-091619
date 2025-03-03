import React from 'react';
import { actors } from '../data';
import Movies from './Movies';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div>
          <h3>{actor.name}</h3>
          <p>Movies: </p>
          <ul>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </ul>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
