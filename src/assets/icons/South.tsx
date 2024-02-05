import React from 'react'
import Icon from '@mui/icons-material/South';

interface PropTypes {
    size?: number;
}
const South: React.FC<PropTypes> = ({ size }) => {
    return (
        <Icon sx={{ fontSize: size }} />
    )
}

export default South