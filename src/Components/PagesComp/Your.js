import React,{useState,useEffect} from 'react';
import CardsList from '../CardComp/CardsList';
import {UserData} from '../Data/UserData';

const Your = () => {
    const [dataSource, setdataSource] = useState([]);

    useEffect(() => {
        setdataSource(UserData.filter((user) => user.owner_id==1));
    }, []);

    return (
        <CardsList dataSource={dataSource}/>
    );
}

export default Your;