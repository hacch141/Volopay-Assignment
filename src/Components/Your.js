import React,{useState,useEffect} from 'react';
import CardsList from './CardsList';
import {UserData} from './UserData';

const Your = () => {
    const [dataSource, setdataSource] = useState([]);

    useEffect(() => {
        setdataSource(UserData.filter((user) => user.userName.toLowerCase().includes("harsh")));
    }, []);

    return (
        <CardsList dataSource={dataSource}/>
    );
}

export default Your;