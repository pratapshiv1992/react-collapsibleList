import React from 'react';
import ListItem from "./ListItem";

const CollapsibleList = ({data}) => {
    return <ul>
        <ListItem data={data} />
    </ul>
}

export default CollapsibleList;