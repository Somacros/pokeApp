import React  from "react";
import PokemonLogo from "./pokemonlogo.svg";
import './pokemonLogo.css';

const Logo = () => {
    return (
        <div className="pokemonLogo">
            <img src={ PokemonLogo } className="w-70" alt="" />
        </div>
    );
}

export default Logo;