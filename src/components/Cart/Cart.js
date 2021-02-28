import React from 'react';
import BuyedPlayer from '../BuyedPlayer/BuyedPlayer';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    
    return (
        <div>
            <h2>Player Cart</h2>
            <h3>Player buyed: {cart.length}</h3>
            {
                cart.map(player => <p>{player.name}</p>)
            }
            
        </div> 
    );
};

export default Cart;