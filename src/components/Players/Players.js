import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCricket, faBowlingBall, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    // console.log(props.player) 
    const {name, salary, image, team} = props.player;    // destructuring
    return (
        <div className="players">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h3>Team: {team}</h3>
                <h4>Salary: ${salary}</h4>
                <button className="player-button" onClick={() => props.handleButton(props.player)}>
                <FontAwesomeIcon icon={faShoppingCart} />Click to Buy <b>{name}</b></button>
            </div>
        </div>
    );
};

export default Players;