import React,{useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import {BiFilter} from 'react-icons/bi';
import './Filter.css'
import PopupFilter from './PopupFilter';

const Filter = () => {
    const [popup, setPopup] = useState('close')

    const open = () => {
        switch(popup) {
            case 'close' :
                setPopup('open')
                return;
            case 'open' :
                setPopup('close')
                return;
            default :
                setPopup('close')
        }
    }
    return (
        <div className='filter'>
            <div className='btn-div'>
                <FiSearch />
                <button onClick={() => open()}>
                    <BiFilter /> Filter
                </button>
                <PopupFilter pop={popup}/>
            </div>
        </div>
    );
}

export default Filter;
