import React from 'react';
import Contact from './contact';

const ContactsList = ({contacts}) =>
    <ul>
        { contacts.map( contact =>  <Contact contact={contact}/>)}
    </ul>;

export default ContactsList;