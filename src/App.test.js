import React from 'react';
import {render} from '@testing-library/react';
import CollapsibleList from './components/CollapsibleList'
import {listData} from "./mockData";

test('render Test render', () => {
    const {getByTestId} = render(<CollapsibleList data={listData}/>);
    const collapsibleListElement = getByTestId('collapsible-list-root');
    expect(collapsibleListElement).toBeInTheDocument();
});