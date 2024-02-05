import React from 'react'
import Icon from '@mui/icons-material/West';

interface PropTypes {
    size?: number;
}
const West: React.FC<PropTypes> = ({ size }) => {
    return (
        <Icon sx={{ fontSize: size }} />
    )
}

export default West