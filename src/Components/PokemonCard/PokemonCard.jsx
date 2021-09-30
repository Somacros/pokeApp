import React from 'react'
import '../../App.css';
import './PokemonCard.css';
import Type from "../Type/Type";


const PokedexCard = ({ pokemonName, pokemonID, pokemonDraw, pokemonTypes, typesMap }) => {
    let fixedPokemonNumber = pokemonID < 10 ? `00${pokemonID}` : pokemonID < 100 ? `0${pokemonID}` : pokemonID;
    return (
        <div className="pokemonCard ma3 grow pointer">
            <div className="pokemonSprite">
                <img src={pokemonDraw} alt={pokemonName} className="w-100" />
            </div>
            <div className="flex wrap">
                <div className="tc pokemonNumber">
                    <p className="helvetica br-100"> #{fixedPokemonNumber}</p>
                </div>
                <div className="tc w-80 pokemonName">
                    <p className="helvetica pa0 ma0 fw4 f5 f5-ns f7-l"> {pokemonName} </p>
                    <div className='pokemonTypes flex wrap'>
                        {
                            pokemonTypes.length > 0 ? renderTypes(typesMap, pokemonTypes) : undefined
                        }
                    </div>
                </div>

            </div>
        </div>
    );

}

const renderTypes = (typesMap, typeArray) => {
    let componenArray = typeArray.map((type, index) => {
        let typeStyle = typesMap[`${type.type.name}`];
        return <Type param={typeStyle} key={index+1}></Type>
    })

    return componenArray;
}

export default PokedexCard;