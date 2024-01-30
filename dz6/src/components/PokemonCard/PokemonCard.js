import React, { useState, useEffect } from "react";
import classes from "./PokemonCard.module.css"
import axios from 'axios'

const PokemonCard = ({pokemons}) => {
    const [pokemonDetails, setPokemonDetails] = useState([])

    const getPokemonDetails = async (index) => {
        if (index < pokemons.length) {
            try {
                const response = await axios.get(pokemons[index].url)
                const data = response.data
                setPokemonDetails((prevDetails) => [...prevDetails, data])
                await getPokemonDetails(index + 1)
            } catch (e) {
                console.log("error", e)
            }
        }
    }

    useEffect(() => {
        getPokemonDetails(0)
    }, [pokemons])

    return (
        <div className={classes.cardWrapper}>
            {pokemonDetails.map((details, index) => (
                <div key={index} className={classes.card}>
                    <img 
                      src={details.sprites.other.dream_world.front_default} 
                      alt={details.name} 
                    />
                    <h3>{details.name}</h3>
                </div>
            ))}
        </div>
    )
}

export default PokemonCard