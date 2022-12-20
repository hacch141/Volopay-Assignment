import React from 'react';
import styled from 'styled-components';
import FilterForm from './FilterForm';

const PopupFilter = (props) => {
    console.log(props);
    return (
        <>
            {props.pop === 'open' ?  
            <Container>
                <FilterForm />
            </Container>
            : ""}
        </>
    );
}

const Container = styled.div`
    height: 300px;
    width: 380px;
    left:50%;
    top:50%;
    border-radius: 10px;
    box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
    webkit-transform: translate(-50%, -50%);
    transform: translate(-100%, 9%);
    background-color: #fff;
    position: absolute;
    align-items: center;
`;

export default PopupFilter;
