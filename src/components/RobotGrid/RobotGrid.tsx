import React, { useEffect, useState } from 'react'
import Button from '../Button/Button';
import Bot from '../Robot/Bot';
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
    const [robotPosition, setrobotPosition] = useState<Cell>({ x: 1, y: 1 });
    const [buttonClickError, setButtonClickError] = useState<Boolean>(false);
    const [teleportDelay, setTeleportDelay] = useState<number>(0);
    const [teleportingPosition, setTeleportingPosition] = useState<Cell>();

    useEffect(() => {
        // Calculated delay will be applied here, after the timeout robot position wil be updated
        const timeout = setTimeout(() => {
            setrobotPosition({
                x: teleportingPosition?.x ?? robotPosition.x,
                y: teleportingPosition?.y ?? robotPosition.y
            });
            setButtonClickError(false)

        }, teleportDelay)

        return () => clearTimeout(timeout);
    }, [teleportDelay])

    // Function: for move robot position using navigation buttons
    const moveBot = (direction: 'N' | 'S' | 'E' | 'W', min: number, max: number): void => {
        const updatedPosition = { ...robotPosition }
        switch (direction) {
            case "N":
                if (updatedPosition.x < max) {
                    updatedPosition.x = robotPosition.x + 1;
                    setButtonClickError(false)
                } else {
                    setButtonClickError(true)
                }
                break;
            case "S":
                if (updatedPosition.x > min) {
                    updatedPosition.x = robotPosition.x - 1;
                    setButtonClickError(false)
                } else {
                    setButtonClickError(true)
                }
                break;
            case "W":
                if (updatedPosition.y > min) {
                    updatedPosition.y = robotPosition.y - 1;
                    setButtonClickError(false)
                } else {
                    setButtonClickError(true)
                }
                break;
            case "E":
                if (updatedPosition.y < max) {
                    updatedPosition.y = robotPosition.y + 1;
                    setButtonClickError(false)
                } else {
                    setButtonClickError(true)
                }
                break;
            default:
                break;
        }
        setrobotPosition(updatedPosition)
    }

    const calculateTeleportingDelay = (currentPosition: Cell): Number => {
        // Compare robot position with current position to calculate teleporting distace by x & y axis. consider only absolute values
        const distanceX = Math.abs(currentPosition.x - robotPosition.x);
        const distanceY = Math.abs(currentPosition.y - robotPosition.y);
        return (distanceX + distanceY) * 50;
    }

    // Function: bot travel on cell click with a delay
    const moveBotOnCellClick = (currentPosition: Cell): void => {
        // Set cell click position in a state variable to access inside the useEffect -> setTimeout
        setTeleportingPosition(currentPosition);
        // Calculate and set delay
        const delay: number = Number(calculateTeleportingDelay(currentPosition))
        setTeleportDelay(delay);
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
                    currentCell.x === robotPosition.x && currentCell.y === robotPosition.y ? <Bot size={40}/> : ""
                }
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
            <h1>Simulate Movement of a Simple Robot</h1>
            <div className={`grid  ${buttonClickError ? 'error' : ''}`}>
                {grid}
            </div>
            <h4 className={`bot-position-text ${buttonClickError ? 'invalid' : ''}`}>
                {
                    !buttonClickError
                        ? `Bot cell position X: ${robotPosition.x}, Y: ${robotPosition.y}`
                        : 'Invalid position'
                }
            </h4>
            <div className='button-group'>
                <div className='button-row'>
                    <Button onClickAction={() => moveBot('N', 1, 5)} buttonText="North" />
                </div>
                <div className='button-middle-row'>
                    <Button onClickAction={() => moveBot('W', 1, 5)} buttonText="West" />
                    <Button onClickAction={() => moveBot('E', 1, 5)} buttonText="East" />
                </div>
                <div className='button-row'>
                    <Button onClickAction={() => moveBot('S', 1, 5)} buttonText="South" />
                </div>
            </div>
        </div>
    )
}

export default RobotGrid