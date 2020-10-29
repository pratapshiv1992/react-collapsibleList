import React from 'react';
import ListItem from "../ListItem";
import './index.css'

const List = ({data, open}) => {
    return <ul className={open ? 'list' : 'hide-list'}>
        <ListItem data={data}/>
    </ul>
}

export default List;