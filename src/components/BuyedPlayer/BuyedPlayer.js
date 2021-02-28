import React from 'react';

const BuyedPlayer = (props) => {
    console.log(props);
    const player = props.playe;
    
    return (
        <div>
            <h4>Buyed player: </h4>
            <p>{player.name}</p>
        </div>
    );
};

export default BuyedPlayer;