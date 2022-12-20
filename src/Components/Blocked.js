import React,{useState,useEffect} from 'react';
import CardsList from './CardsList';
import {UserData} from './UserData';

const Blocked = () => {
    const [dataSource, setdataSource] = useState([]);

    useEffect(() => {
        setdataSource(UserData.filter((user) => user.status.toLowerCase().includes("blocked")));
    }, []);

    return (
        <CardsList dataSource={dataSource}/>
    );
}

export default Blocked;