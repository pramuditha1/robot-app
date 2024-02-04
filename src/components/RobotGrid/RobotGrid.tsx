import React, { useState } from 'react'
import Button from '../Button/Button';
import "./RobotGrid.css"

interface RobotGridProps {
    rows: number;
    columns: number;
}

interface Cell {
    x: number;
    y: number;
  }

const RobotGrid: React.FC<RobotGridProps> = ({ columns, rows }) => {
    const grid: JSX.Element[] = [];
    // State vairable to hold robot position and set initial state
    const [robotPosition, setrobotPosition] = useState({ x: 1, y: 1 });

    // Function: for move robot position using navigation buttons
    const moveBot = (direction: 'N' | 'S' | 'E' | 'W', min: number, max: number): void => {
        const updatedPosition = { ...robotPosition }
        switch (direction) {
            case "N":
                updatedPosition.x = updatedPosition.x < max ? robotPosition.x + 1 : updatedPosition.x;
                break;
            case "S":
                updatedPosition.x = updatedPosition.x > min ? robotPosition.x - 1 : updatedPosition.x;
                break;
            case "W":
                updatedPosition.y = updatedPosition.y > min ? robotPosition.y - 1 : updatedPosition.y;
                break;
            case "E":
                updatedPosition.y = updatedPosition.y < max ? robotPosition.y + 1 : updatedPosition.y;
                break;
            default:
                break;
        }
        setrobotPosition(updatedPosition)
    }

    // Function: bot travel on cell click
    const moveBotOnCellClick = (currentPosition: Cell) : void => {
        setrobotPosition(currentPosition)
    }

    // Use two for loops to generate the gird : first loop for rows
    for (let x = 0; x < rows; x++) {
        const row: JSX.Element[] = [];
        // Second loop for columns
        for (let y = 0; y < columns; y++) {
            // As per mock ui most left bottom cell is (x: 1, y: 1). Hence need some computation to get current cell position
            const currentCell = { x: rows - x, y: y + 1 }
            row.push(<div key={y} data-testid='cell'
                className={`cell ${currentCell.x === robotPosition.x && currentCell.y === robotPosition.y ? "traveled-cell" : ""}`}
                onClick={() => moveBotOnCellClick(currentCell)}>
                {
                    currentCell.x === robotPosition.x && currentCell.y === robotPosition.y ? "robot" : ""
                }
                {currentCell.x}, {currentCell.y}
            </div>)
        } // End of column loop & Push row to grid
        grid.push(
            <div key={x} className='row' data-testid='row'>
                {row}
            </div>
        );
    } // End of row loop

    return (
        <div className='bot-app'>
            Robot Grid
            <div className='grid'>
                {grid}
            </div>
            <div className='button-group'>
                <div className='button-row'>
                    <Button onClickAction={() => moveBot('N', 1, 5)} buttonText="Up" />
                </div>
                <div className='button-middle-row'>
                    <Button onClickAction={() => moveBot('W', 1, 5)} buttonText="Left" />
                    <Button onClickAction={() => moveBot('E', 1, 5)} buttonText="Right" />
                </div>
                <div className='button-row'>
                    <Button onClickAction={() => moveBot('S', 1, 5)} buttonText="Down" />
                </div>
            </div>
        </div>
    )
}

export default RobotGrid