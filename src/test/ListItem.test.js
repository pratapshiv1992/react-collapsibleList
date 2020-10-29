import React from 'react';
import {render} from '@testing-library/react';
import ListItem from '../components/ListItem'
import {listData} from "../mockData";

describe('render ListItem component', () => {
    const {getByTestId} = render(<ListItem data={listData}/>);
    test('test ListItem component', () => {
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
