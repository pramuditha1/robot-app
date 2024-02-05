import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import RobotGrid from './RobotGrid';

const props = {
    columns: 5,
    rows: 5,
}

test('renders learn robot grid application', () => {
    render(<RobotGrid {...props} />);
    const linkElement = screen.getByText(/Simulate Movement of a Simple Robot/i);
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

test('clicking North button should move the robot up', () => {
    render(<RobotGrid {...props} />);
    const NorthButton = screen.getByText('N');
    fireEvent.click(NorthButton);
    const robotText = screen.getByText('Bot cell position X: 2, Y: 1');
    expect(robotText).toBeInTheDocument();
})

test('clicking East button should move the robot to right side', () => {
    render(<RobotGrid {...props} />);
    const EastButton = screen.getByText('E');
    fireEvent.click(EastButton);
    const robotText = screen.getByText('Bot cell position X: 1, Y: 2');
    expect(robotText).toBeInTheDocument();
})

test('clicking on West button should move the robot to left side', () => {
    render(<RobotGrid {...props} />);
    const WestButton = screen.getByText('W');
    fireEvent.click(WestButton);
    const robotText = screen.getByText('Invalid position');
    expect(robotText).toBeInTheDocument();
})

test('clicking on South button should move the robot to down side', () => {
    render(<RobotGrid {...props} />);
    const SouthButton = screen.getByText('S');
    fireEvent.click(SouthButton);
    const robotText = screen.getByText('Invalid position');
    expect(robotText).toBeInTheDocument();
})