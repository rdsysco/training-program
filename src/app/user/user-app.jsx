import React from 'react';
import DataComponent from '../HOC/data-component';
import User from './user';
import BackToHome from '../navigation/back-to-home';

const UserDetail = DataComponent(User);
const UserApp = ({match:{params:{user: key = 'amirtvkli'}}}) => 
<>
    <BackToHome/>
    <UserDetail url={`https://api.github.com/users/${key}`}/>
</>

export default UserApp;