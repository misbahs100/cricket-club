import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCricket, faBowlingBall, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {    
    const cart = props.cart;

    const Budget = cart.reduce((Sum, budget) => Sum + budget.salary , 0);
    const totalBudget = Number(Budget.toFixed(2));
    
    return (
        <div className="cart">
            <h2 className="text-center border-bottom"><b>Player Cart</b> </h2>
            <br/>
            <h4>Player buyed: {cart.length}</h4>
            
            {
                cart.map(player => <p><img className="cart-img" src={player.image} alt=""/> {player.name} (${player.salary})</p>)
            }
            <h4>Total Salary/Budget: {totalBudget}</h4> <br/>
            <button className="btn btn-success ">
            <FontAwesomeIcon icon={faShoppingCart} /> Book your Club!</button>
        </div> 
    );
};

export default Cart;