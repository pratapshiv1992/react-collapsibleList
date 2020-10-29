import React, {useState} from 'react';
import List from '../List'
import './index.css'


const Item = ({hasSubMenus, item, onItemClick}) => {
    const [open, setOpen] = useState(true);
    const onClick = (e) => {
        if (typeof onItemClick === 'function') {
            onItemClick(e, item);
        }
        setOpen(!open);
    }

    return <li key={`item-${item.menuId}`}>
        {
            hasSubMenus &&
            <span onClick={onClick} className='listItem-caret'>
                    <i className={open ? 'fa fa-caret-down' : 'fa fa-caret-right'}/>
                </span>
        }
        <span className={hasSubMenus ? '' : 'listItem'}>{item.name}</span>
        {hasSubMenus && <List data={item.subMenus} open={open}/>}
    </li>
}

const ListItem = ({onItemClick, data = []}) => {
    return data.map((item, key) => {
        let hasSubMenus = false;
        if (!!item.subMenus && Array.isArray(item.subMenus)) {
            hasSubMenus = true;
        }
        return <Item key={`item--${key}`} hasSubMenus={hasSubMenus} item={item} onItemClick={onItemClick}/>
    })

}

export default ListItem;
