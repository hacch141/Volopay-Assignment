import React,{useState,useEffect} from 'react';
import CardsList from './CardsList';
import {UserData} from './UserData';

const All = () => {
    const [dataSource, setdataSource] = useState([]);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(true);
    let start = (page*10)-10;
    let end = page * 10;
    const newData = UserData.slice(start,end);

    useEffect(() => {
        setdataSource(prev => [...prev, ...newData]);
        setLoading(false);
    }, [page]);

    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            setLoading(true);
            setPage(prev => prev+1);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll",handleScroll);
        return () => window.removeEventListener("scroll",handleScroll)
    },[])

    return (
        <CardsList dataSource={dataSource}/>
    );
}

export default All;