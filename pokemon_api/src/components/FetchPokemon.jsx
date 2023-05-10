import React, { useState } from 'react';
import axios from 'axios';

const FetchPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemonThen = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                setPokemonList(jsonResponse.results);
            })
            .catch(err => console.log(err))
    }

    const fetchPokemonAxiosThen = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                setPokemonList(response.data.results);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Choose Your Pokemon</h1>
            <button onClick={fetchPokemonThen}>Fetch Pokemon with Fetch</button>
            <button onClick={fetchPokemonAxiosThen}>Fetch Pokemon with Axios</button>
            {pokemonList ? (
                <ul>
                    {pokemonList.map((pokemon, idx) => (
                        <li>
                            <span>{pokemon.name}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1>Let's generate some Pokemon!</h1>
            )}


        </div>
    );
}

export default FetchPokemon;
