import React from "react";

const Type = ({ param }) => {
    let type = param || { name: 'normal', colours: { primary: '#FFFF', secondary: '#FFFF' } }
    const { name, colours } = type;
    const { primary, secondary, fontColor } = colours;
    let style = {
        background: `linear-gradient(180deg, ${primary} 50%, ${secondary} 50%)`,
        padding: "0px 5px 0px 5px",
        fontSize: "0.8em",
        borderRadius: "20%",
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: "1px",
        margin: "0px 1px 0px 1px"
    }

    return (
        <p style={style} className='type'>
            {name.toUpperCase()}
        </p>
    )
}

export default Type;