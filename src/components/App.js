import React from 'react';
import './App.css'
import CollapsibleList from './CollapsibleList'
import {listData} from '../mockData';

export default function SimpleTabs() {
    return (
        <div className="App">
            <CollapsibleList data={listData} />
        </div>
    );
}
