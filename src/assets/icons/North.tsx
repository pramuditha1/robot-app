import React from 'react'
import Icon from '@mui/icons-material/North';

interface PropTypes {
    size?: number;
}
const North: React.FC<PropTypes> = ({ size }) => {
    return (
        <Icon sx={{ fontSize: size }} />
    )
}

export default North