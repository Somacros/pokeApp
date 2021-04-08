import React  from "react";
import Pokeball from "./loadingPokeball.gif";

const LoadingPokeball = () => {
    return (
        <div className="tc">
            <img src={ Pokeball } className="h-5" alt="" />
        </div>
    );
}

export default LoadingPokeball;