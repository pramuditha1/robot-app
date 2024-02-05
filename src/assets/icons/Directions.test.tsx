import React from 'react';
import { render, screen } from '@testing-library/react';
import DirectionIcon from './Direction';

// Update the type of 'direction' to match the expected types
const props: { direction: 'N' | 'S' | 'E' | 'W'; size: number } = {
    direction: 'N',
    size: 40
};

test('should render icon with the correct direction and size', () => {
    render(<DirectionIcon {...props} />);
    const iconElement = screen.getByTestId('direction-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveStyle('font-size: 40px');
});