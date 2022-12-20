import React from 'react';
import burner from '../../Assets/fire.png'
import subscription from '../../Assets/arrow.png'
import './Card.css'
import styled from "styled-components";


const Card = ({key , id , name , userName , budget_name , card_type , Expires , limit , Spent , Spent_curr , Available_to_spend , Available_to_spend_curr}) => {
    console.log({card_type});
    let progress;
    return (
        <div className= 'card'>
            <div className='name-div'>
                <div>
                    <h3>{name}</h3>
                    <span className='user-name'>{userName} · {budget_name}</span>
                    <h5 className='card-type'>{card_type}</h5>
                </div>
                <div className='logo-div'>
                    <img src={{card_type}=='SUBSCRIPTION' ? subscription : burner} alt={card_type} />
                    <span>{Expires} Limit: {limit} SGD</span>
                </div>
            </div>
            <div>
                <span className='spent-div'>
                    <div>
                        Spent
                    </div>
                    <div>
                        {Spent} {Spent_curr}
                    </div>
                </span>
                <span className='spent-div'>
                    <div>
                        Available to spend
                    </div>
                    <div className='available-to-spend'>
                        {Available_to_spend} {Available_to_spend_curr}
                    </div>
                </span>
            </div>
        </div>
    );
}


export default Card;
