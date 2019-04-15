import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const Menu = () =>
        <div className='menu-container'>
            <Link className="app-link" to="/colorapp">
                <Typography variant="h6" color="inherit" >
                    <Icon className='app-link__icon'>format_color_fill</Icon>
                    Color App
                </Typography>
            </Link>
            <Link className="app-link" to="/user/amirtvkli">
                <Typography variant="h6" color="inherit" >
                        <Icon className='app-link__icon'>person</Icon>
                        User
                </Typography>
            </Link>
        </div>

export default Menu;