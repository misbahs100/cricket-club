import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    
    return (
        <div className="cart">
            <h2 className="text-center border-bottom"><b>Player Cart</b> </h2>
            <br/>
            <h3>Player buyed: {cart.length}</h3>
            {
                cart.map(player => <p>{player.name}</p>)
            }
            
        </div> 
    );
};

export default Cart;