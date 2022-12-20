import React from 'react';
import './Header.css'
import { BiVideo } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';


const Header = () => {
    return (
        <div className='header'>
            <div className='left-part'>
                <h1>Virtual Cards</h1>
                <div className='left-subright-part'>
                    <BiVideo/> 
                    <span>Learn more</span>
                </div>
            </div>
            <div className='right-part'>
                <button className='virtual-card-btn'>
                    <AiOutlinePlus />
                    <h4>Virtual Card</h4>
                </button>
            </div>
        </div>
    );
}

export default Header;
