import React from 'react'
import Icon from '@mui/icons-material/East';

interface PropTypes {
    size?: number;
}
const East: React.FC<PropTypes> = ({ size }) => {
    return (
        <Icon sx={{ fontSize: size }} />
    )
}

export default East