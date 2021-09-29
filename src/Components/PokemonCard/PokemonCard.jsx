import React from 'react'
import '../../App.css';


//import Type  from "../Type/Type";


const PokedexCard = ( {pokemonName, pokemonID, pokemonDraw} ) => {
    return (
        <div className="pokemonCard ma3 grow pointer">
            <div className="pokemonSprite">
                <img src = { pokemonDraw } alt = { pokemonName } className="w-100"/>
            </div>
            <div className="w-100 tl pokemonNumber">
                <p className="helvetica pa0 ma0 fw4 f5 f5-ns f7-l"> #{ pokemonID }</p>
            </div>
            <div className="tc w-100 pokemonName">
                <p className="helvetica pa0 ma0 fw4 f5 f5-ns f7-l"> { pokemonName } </p>
            </div>
        </div>
    );

}

export default PokedexCard;