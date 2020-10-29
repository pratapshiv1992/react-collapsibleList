import React from 'react';
import ListItem from "../ListItem";
import './index.css'

const CollapsibleList = ({data}) => {
    return <ul className='collapsible-list'>
        <ListItem data={data}/>
    </ul>
}

export default CollapsibleList;