import React from 'react';
import { render, screen, within } from '@testing-library/react';
import RobotGrid from './RobotGrid';

const props = {
    columns: 5,
    rows: 5,
}

test('renders learn robot grid application', () => {
    render(<RobotGrid {...props} />);
    const linkElement = screen.getByText(/Robot Grid/i);
    expect(linkElement).toBeInTheDocument();
});

test('grid should render correct number of rows', () => {
    render(<RobotGrid {...props} />);
    const rows = screen.getAllByTestId('row');
    expect(rows).toHaveLength(props.rows);
})

test('grid should render correct number of columns for each row', () => {
    render(<RobotGrid {...props} />);
    const rows = screen.getAllByTestId('row');
    rows.forEach((row) => {
        const cells = within(row).getAllByTestId('cell');
        expect(cells).toHaveLength(props.columns);
    });
})