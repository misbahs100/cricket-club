import React, { useEffect, useState } from 'react';
import './Club.css';
import playersData from '../../playersData/playersData.json';
import Players from '../Players/Players';
import Cart from '../Cart/Cart';

const Club = () => {
    const [players, setPlayers] = useState(playersData);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        setPlayers(playersData);
    } , [])
    // console.log(players);
    const handleButton = (player) =>{
        // console.log('button clicked'); 
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="club-container">
            <div className="players-container">
                {
                    players.map(player => <Players player={player} handleButton={handleButton}></Players>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Club;