import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import Bot from './Bot';

test('it should render bot icon in document', () => {
    const {container} = render(<Bot/>);
    const bot = container.querySelector('.bot');
    expect(bot).toBeInTheDocument();
});

test('it should render bot icon in document with given size', () => {
    const size = 30;
    const {container} = render(<Bot size={size}/>)

    const bot = container.querySelector('.bot');
    expect(bot).toHaveStyle(`font-size: ${size}px`);
})