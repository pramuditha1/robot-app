import React, { useState } from 'react'
import "./RobotGrid.css"

interface RobotGridProps {
    rows: number;
    columns: number;
}
const RobotGrid: React.FC<RobotGridProps> = ({ columns, rows }) => {
    const grid: JSX.Element[] = [];
    const [robotPosition, setrobotPosition] = useState({ x: 1, y: 1 })
    // Use two for loops to generate the gird : first loop for rows
    for (let x = 0; x < rows; x++) {
        const row: JSX.Element[] = [];
        // Second loop for columns
        for (let y = 0; y < columns; y++) {
            // As per mock ui most left bottom cell is (x: 1, y: 1). Hence need some computation to get current cell position
            const currentCell = { x: rows - x, y: y + 1 }
            row.push(<div key={y} data-testid='cell'
                className={`cell ${currentCell.x === robotPosition.x && currentCell.y === robotPosition.y ? "traveled-cell" : ""}`}>
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
        <div>
            Robot Grid
            <div className='grid'>
                {grid}
            </div>
        </div>
    )
}

export default RobotGrid