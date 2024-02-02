import React, { useEffect, useState } from 'react';
import classes from './PokemonCard.module.css';
import axios from 'axios';


const PokemonCard = ({ pokemon }) => {
  const [ pokemonOne, setPokemonOne ] = useState({});
  console.log(pokemonOne, 'pokemonOnepokemonOne');
  const getPokemon = async(url) => {
    try {
      const { data } = await axios.get(url);
      console.log(data, 'sdfsdfsdfsdf');
      return setPokemonOne(data.sprites.other.dream_world.front_default);
    } catch(e) {
      console.log('error'.e);
    } finally {
      console.log('final');
    }
  };

  useEffect(() => {
    getPokemon(pokemon.url);
  }, [ pokemon.url ]);


  return (
    <div className={classes.card}>
      {pokemon.name}
      <img src={pokemonOne} alt="pokemon"/>
    </div>
  );
};

export default PokemonCard;
