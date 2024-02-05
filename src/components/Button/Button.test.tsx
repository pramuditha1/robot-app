import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Button from './Button';
import North from '../../assets/icons/North';

const props = {
    onClickAction: jest.fn(),
    buttonText: "North",
    Icon: <North/>
}

test('should render button with given text', () => {
    render(<Button {...props}/>)
    const linkElement = screen.getByText(/North/i);
    expect(linkElement).toBeInTheDocument();
})

test('should render North icon', () => {
    render(<Button {...props}/>)
    const iconElement = screen.getByTestId(/button-icon/i);
    expect(iconElement).toBeInTheDocument();
})