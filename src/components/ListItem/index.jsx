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

    return <li data-testid={`item-root-${item.menuId}`} key={`item-${item.menuId}`}>
        {
            hasSubMenus &&
            <span data-testid='caret-root' onClick={onClick} className='listItem-caret'>
                    <i className={open ? 'fa fa-caret-down' : 'fa fa-caret-right'}/>
                </span>
        }
        <a href={item.urlString} target='_blank' alt='data_missing'><span
            className={hasSubMenus ? '' : 'listItem'}>{item.name}</span></a>
        {hasSubMenus && <List id={`list-root-${item.menuId}`} data={item.subMenus} open={open}/>}
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
