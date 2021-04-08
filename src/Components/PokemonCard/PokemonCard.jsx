import React from 'react'


//import Type  from "../Type/Type";


const PokedexCard = ( {pokemonName, pokemonID, pokemonDraw} ) => {
    return (
        <div className=" w-30 w-10-l pa3 ma3  grow pointer ">
            <div className="w-100">
                <img src = { pokemonDraw } alt = { pokemonName } className="w-100 dim"/>
            </div>
            <div className="w-100 tl">
                <p className="helvetica pa0 ma0 fw4 f5 f5-ns f7-l"> N.° { pokemonID }</p>
            </div>
            <div className="tc  w-100">
                <p className="helvetica mt2 di ml0 pa0 fw6 f5-l f6 tc"> { pokemonName } </p>
            </div>
            {/*
                pokemonTypes.forEach(pkmnType => {
                    <Type type = {pkmnType}/>
                })*/
            }
        </div>
    );

}

export default PokedexCard;