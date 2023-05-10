import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from '../models/mock-pokemon';
import Pokemon from '../models/pokemon';
import PokemonCard from '../components/PokemonCard';

const PokemonList: FunctionComponent = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        setPokemons(POKEMONS);
    },[]);
    const test=() => {
        console.log(pokemons);
    }
    return (
        <>
            <h1 className="center">Pokédex</h1>
            <p onClick={test}>Il y a {pokemons.length } pokemons dans mon deck!</p>
            <div className="container">
            <div className="row">
                {pokemons.map((pokemon) => (
                    <PokemonCard pokemon={pokemon} key={pokemon.id}/>
                ))}
            </div>
            </div>
        </>
    );
}

export default PokemonList;