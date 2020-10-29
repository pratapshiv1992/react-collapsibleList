import React from 'react';
import {render} from '@testing-library/react';
import CollapsibleList from '../components/CollapsibleList'
import List from '../components/List'
import {listData} from "../mockData";

describe('render List component', () => {
    const clonnedListData = JSON.parse(JSON.stringify(listData));
    const {getByTestId} = render(<List data={clonnedListData} open={true}/>);
    test('test List component', () => {
        const itemElement1 = getByTestId('item-root-1');
        expect(itemElement1).toBeInTheDocument();

        const itemElement2 = getByTestId('item-root-2');
        expect(itemElement2).toBeInTheDocument();

        const itemElement3 = getByTestId('item-root-3');
        expect(itemElement3).toBeInTheDocument();

        const itemElement4 = getByTestId('item-root-4');
        expect(itemElement4).toBeInTheDocument();

        const itemElement5 = getByTestId('item-root-5');
        expect(itemElement5).toBeInTheDocument();

        const itemElement6 = getByTestId('item-root-6');
        expect(itemElement6).toBeInTheDocument();

        const itemElement7 = getByTestId('item-root-7');
        expect(itemElement7).toBeInTheDocument();
    })
});
