import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () =>
<div>
        <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/colorapp">Color App</Link> </li>
            <li><Link to="/user/amirtvkli">User App</Link></li>
        </ul>
</div>;

export default Menu;