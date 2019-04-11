import React from 'react';
import ReactDOM from 'react-dom';
import AlarmClockDisplay from './alarm-clock-display';

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date =>
({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const civilianHours = clockTime =>
({
    ...clockTime,
    hours: (clockTime.hours > 12) ?
    clockTime.hours - 12 :
    clockTime.hours
})

const compose = (...fns) =>
(arg) =>
fns.reduce(
(composed, f) => f(composed),
arg
)

const appendAMPM = clockTime =>
({
    ...clockTime,
    timeOfDay: (clockTime.hours >= 12) ? "PM" : "AM"
})

const display = target => time => target(time);

const formatClock = format =>
time =>
format.replace("hh", time.hours)
.replace("mm", time.minutes)
.replace("ss", time.seconds)
.replace("tt", time.timeOfDay);

const prependZero = key => clockTime =>
({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
    "0" + clockTime[key] :
    clockTime[key]
})

const convertToCivilianTime = clockTime =>
    compose(
    appendAMPM,
    civilianHours
    )(clockTime)
    
const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
            ),
            oneSecond()
        )
//startTicking();

const getClockTime = () => 
    compose(
        getCurrentTime,
        serializeClockTime,
        convertToCivilianTime,
        doubleDigits
    )
;

const render = Component => civilianTime => 
    ReactDOM.render(
        <div className="App">
            <header className="App-header">
                <Component {...civilianTime}/>
            </header>
        </div>,
        document.getElementById('root')
    )

const startTickling = () =>
        setInterval(
            compose(
                getCurrentTime,
                serializeClockTime,
                convertToCivilianTime,
                doubleDigits,
                render(AlarmClockDisplay)
            ),
            oneSecond()
        )

startTickling();


export default getClockTime;