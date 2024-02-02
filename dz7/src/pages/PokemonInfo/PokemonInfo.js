import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import classes from './PokemonInfo.module.css'

const PokemonInfo = () => {
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const {name} = useParams()

  const getPokemonInfo = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      setPokemonInfo(data)
    } catch (e) {
      console.log('Ошибка', e.message)
    }
  }

  useEffect(() => {
    getPokemonInfo()
  }, [name])

  return (
    <div className={classes.info}>
      <div className={classes.image}>
        <img src={pokemonInfo?.sprites?.other.dream_world.front_default} alt="pokemon" />
      </div>
      <div className={classes.caption}>
        <p>Name: {pokemonInfo?.name}</p>
        <p>Type: {pokemonInfo?.types.map((value) => value.type.name).join(', ')}</p>
        <p>Stats: {pokemonInfo?.stats.map((value) => value.stat.name).join(', ')}</p>
        <p>Abilities: {pokemonInfo?.abilities.map((value) => value.ability.name).join(', ')}</p>
        <p>Some moves: {pokemonInfo?.moves.slice(0, 5).map((value) => value.move.name).join(', ')}</p>
      </div>
    </div>
  );
};

export default PokemonInfo
