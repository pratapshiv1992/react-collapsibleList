import React from 'react';
import ListItem from "../ListItem";
import './index.css'

const List = ({id, data, open}) => {
    return <ul data-testid={id} className={open ? 'list' : 'hide-list'}>
        <ListItem data={data}/>
    </ul>
}

export default List;