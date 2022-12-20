import React from 'react';
import Card from './Card';
import './CardsList.css'

const CardsList = ({dataSource}) => {
    return (
        <div className='card-list'>
        {dataSource.map((user, index)=> {
            console.log(user);
            return (
                <Card 
                    key = {index}
                    id = {user.owner_id}
                    name = {user.name}
                    userName = {user.userName}
                    budget_name = {user.budget_name}
                    card_type = {user.card_type}
                    Expires = {user.expiry}
                    limit = {user.limit}
                    Spent = {user.spent.value} 
                    Spent_curr = {user.spent.currency}
                    Available_to_spend = {user.available_to_spend.value} 
                    Available_to_spend_curr = {user.available_to_spend.currency}
                />
            )
        })}
    </div>
    );
}

export default CardsList;
