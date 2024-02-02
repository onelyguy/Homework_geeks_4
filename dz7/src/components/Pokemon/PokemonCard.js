import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './PokemonCard.module.css'
import axios from 'axios'

const PokemonCard = ({ pokemon }) => {
  const [pokemonOne, setPokemonOne] = useState({})

  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url)
      setPokemonOne(data.sprites.other.dream_world.front_default)
    } catch (e) {
      console.log('error', e)
    }
  }

  useEffect(() => {
    getPokemon(pokemon.url)
  }, [pokemon.url])

  return (
    <div className={classes.card}>
      {pokemon.name}
      <img src={pokemonOne} alt="pokemon" />
      <Link to={`/pokemon/${pokemon.name}`}>
        <button>Подробнее</button>
      </Link>
    </div>
  );
};

export default PokemonCard
