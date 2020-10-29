import React from 'react';
import './App.css'
import CollapsibleList from './components/CollapsibleList/index'
import {listData} from './mockData';

export default function App() {
    return (
        <div className="App">
            <CollapsibleList data={listData} />
        </div>
    );
}
