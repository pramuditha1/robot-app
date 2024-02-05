// Types
interface GridTypes {
    columns: number,
    rows: number,
}

interface GridBoundaryTypes {
    min: number,
    max: number,
}

interface DirectionTypes {
    North: string,
    South: string,
    West: string,
    East: string
}

// Delay value
export const DELAY: number = 50;

// Grid data
export const GRID_DATA: GridTypes = {
    columns: 5,
    rows: 5
}

// Grid boundaries
export const GRID_BOUNDARY: GridBoundaryTypes = {
    min: 1,
    max: 5
}

export const APPLICATION_HEADER: string = "Simulate Movement of a Simple Robot";

export const DIRECTIONS: DirectionTypes = {
    North: 'North',
    South: 'South',
    West: 'West',
    East: 'East'
}