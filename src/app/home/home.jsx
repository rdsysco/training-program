import React from 'react'
import Menu from '../navigation/menu';
const Home = (props) => 
    <div className="home-container">
        <div className="home-container__image">
            <img src={require('../../assets/mark.svg')} alt=''></img>
        </div>
        <div className="home-container__content">
            <h1>Welcome to The Test Application</h1>
            <p>This is a test project. The main goal of the project is to learn and practice the main concepts of React Library. </p>
            <p>You can navigate to this pages:</p>
            <Menu/>
        </div>
        
    </div>;

export default Home;