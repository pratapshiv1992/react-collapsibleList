import React from 'react';
import './App.css'
import CollapsibleList from './components/CollapsibleList/index'
import {listData} from './mockData';

/*customCss class can be used to override default css property of the menubar like width, height, background etc */
export default function App() {
    return (
        <div className="App">
            <CollapsibleList data={listData} customCss='customCss'/>
        </div>
    );
}
