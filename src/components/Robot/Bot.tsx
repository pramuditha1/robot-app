import React from 'react'
import RobotIcon from '@mui/icons-material/SmartToy';
import "./Bot.css"

interface BotPropTypes {
    size?: number
}
const Bot: React.FC<BotPropTypes> = ({ size }) => {
    return (
        <RobotIcon sx={{ fontSize: size }} className='bot' />
    )
}

export default Bot