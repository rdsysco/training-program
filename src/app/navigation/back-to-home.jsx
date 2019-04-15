import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';


const BackToHome = () =>
    <Link className='app-link top-fix' to=''>
        <Icon className='app-link__icon'>arrow_back_icon</Icon>
        <p className='app-linx__text'>Return To Home</p>
    </Link>

export default BackToHome;