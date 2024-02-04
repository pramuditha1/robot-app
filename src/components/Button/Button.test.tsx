import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Button from './Button';

const props = {
    onClickAction: jest.fn(),
    buttonText: "Up",
}

test('should render button with given text', () => {
    render(<Button {...props}/>)
    const linkElement = screen.getByText(/Up/i);
    expect(linkElement).toBeInTheDocument();
})