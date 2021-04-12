import React  from "react";
import Pokeball from "./loadingPokeball.gif";

const LoadingPokeball = () => {
    return (
        <div className="tc">
            <img src={ Pokeball } className="h-5" alt="" />
            <div>
                <p className="helvetica mt0 di ml0 pa0 fw6 f5-l f6 tc">Loading...</p>
            </div>
        </div>
    );
}

export default LoadingPokeball;