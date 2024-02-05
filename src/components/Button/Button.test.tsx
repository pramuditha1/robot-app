import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Button from './Button';
import Direction from '../../assets/icons/Direction';

const props = {
    onClickAction: jest.fn(),
    buttonText: "North",
    Icon: React.createElement(Direction)
}

test('it should render button with given text', () => {
    render(<Button {...props}/>)
    const linkElement = screen.getByText(/North/i);
    expect(linkElement).toBeInTheDocument();
})

test('it should render icon', () => {
    render(<Button {...props}/>)
    const iconElement = screen.getByTestId(/button-icon/i);
    expect(iconElement).toBeInTheDocument();
})