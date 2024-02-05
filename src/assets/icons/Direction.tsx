import React from 'react'
import IconNorth from '@mui/icons-material/North';
import IconSouth from '@mui/icons-material/South';
import IconWest from '@mui/icons-material/West';
import IconEast from '@mui/icons-material/East';

interface PropTypes {
    direction: 'N' | 'S' | 'E' | 'W'
    size?: number;
}
const Direction: React.FC<PropTypes> = ({ direction, size }) => {
    switch (direction) {
        case 'N':
          return <IconNorth data-testid="direction-icon" sx={{ fontSize: size }} />;
        case 'S':
          return <IconSouth data-testid="direction-icon" sx={{ fontSize: size }} />;
        case 'W':
          return <IconWest data-testid="direction-icon" sx={{ fontSize: size }} />;
          case 'E':
            return <IconEast data-testid="direction-icon" sx={{ fontSize: size }} />;
        default:
          return null;
      }
}

export default Direction