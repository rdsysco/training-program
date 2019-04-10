import React from 'react';

const PeopleList = ({data: people = []}={}) =>
    <ol className="people-list">
        {people.results.map((person, i) => {
            const {first, last} = person.name
            return <li key={i}>{first} {last}</li>
        })}
    </ol>

export default PeopleList;