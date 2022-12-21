import React,{useState} from 'react';
import {FiSearch} from 'react-icons/fi';
import {BiFilter} from 'react-icons/bi';
import './Filter.css'
import PopupFilter from './PopupFilter';

const Filter = (props) => {
    const [popup, setPopup] = useState('close')
    const [searchData, setsearchData] = useState('');

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

    const handleSearch = (e) => {
        setsearchData(e.target.value)
        finalcall()
    }

    const finalcall = () => {
        props.searchData(searchData)
    }

    return (
        <div className='filter'>
            <div className='btn-div'>
                <div className='search'>
                    <FiSearch />
                    <input 
                        placeholder='Search' 
                        type="text" 
                        value={searchData} 
                        onChange={(e)=>handleSearch(e)} 
                    />
                </div>
                <button onClick={() => open()}>
                    <BiFilter /> Filter
                </button>
                <PopupFilter pop={popup}/>
            </div>
        </div>
    );
}

export default Filter;
