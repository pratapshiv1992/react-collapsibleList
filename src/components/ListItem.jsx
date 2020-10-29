import React from 'react';
import List from './List'


const ListItem = ({data = []}) => {
    return data.map((item, key) => {
        let hasSubMenus = false;
        if (!!item.subMenus && Array.isArray(item.subMenus)) {
            hasSubMenus = true;
        }
        return <li key={`item-${key}`}>
            {item.name}
            {hasSubMenus && <List data={item.subMenus}/>}
        </li>
    })

}

export default ListItem;
