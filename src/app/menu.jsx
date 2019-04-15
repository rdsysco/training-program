import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Menu = () =>
    <AppBar position="static">
        <Toolbar>
            <Link className="app-link" to="/">
                <Typography variant="h6" color="inherit" >
                    Home
                </Typography>
            </Link>
            <Link className="app-link" to="/colorapp">
                <Typography variant="h6" color="inherit" >
                    Color App
                </Typography>
            </Link>
            <Link className="app-link" to="/user/amirtvkli">
            <Typography variant="h6" color="inherit" >
                    User
            </Typography>
            </Link>
        </Toolbar>
    </AppBar>

export default Menu;