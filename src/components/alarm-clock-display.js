import React from 'react';

const AlarmClockDisplay = ({hours, minutes, seconds, timeOfDay}) => 
    <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{timeOfDay}</span>
    </div>

export default AlarmClockDisplay;