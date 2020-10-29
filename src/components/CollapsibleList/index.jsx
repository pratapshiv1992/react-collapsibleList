import React from 'react';
import ListItem from "../ListItem";
import './index.css'

const CollapsibleList = ({data, customCss}) => {
    return <ul data-testid='collapsible-list-root' className={`collapsible-list ${customCss}`}>
        <ListItem data={data}/>
    </ul>
}

export default CollapsibleList;