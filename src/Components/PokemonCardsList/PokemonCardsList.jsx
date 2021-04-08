import React from "react";

import PokedexCard from "../PokemonCard/PokemonCard";

const PokemonCardsList = ( {pokedex} ) => {

    return (
        <div className="flex flex-wrap justify-center">
            {
                pokedex.map(( pokemon, index, array ) => {
                   return <PokedexCard pokemonName = {pokemon.name} pokemonID = {index+1} pokemonDraw = {pokemon.draw} key = {index + 1} />
                })
            }
        </div>
    );


  

}

export default PokemonCardsList;