import React from "react";

const Type = ( type ) => {

    const { name, colours } = type;
    const { primary, secondary, fontColor } = colours;

    return(
        <p style={{  background: `linear-gradient(180deg, ${ primary } 50%, ${ secondary } 50%);`,
        color: fontColor }}>
            { name }
        </p>
    ) 
}

export default Type;