import React from 'react';

const AlarmClockDisplay = ({hours, minutes, seconds, ampm}) => 
    <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{ampm}</span>
    </div>

export default AlarmClockDisplay;