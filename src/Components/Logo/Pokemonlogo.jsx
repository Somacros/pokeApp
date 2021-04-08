import React  from "react";
import PokemonLogo from "./pokemonlogo.png";

const Logo = () => {
    return (
        <div className="tc mt3 mb5">
            <img src={ PokemonLogo } className="w-70" alt="" />
        </div>
    );
}

export default Logo;