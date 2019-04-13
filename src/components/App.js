import React, { Component } from 'react';
import { v4 } from 'uuid';
import '../styles/App.css';
// import AddColorForm from './add-color-form';
// import ColorList from './color-list';
// import MemberList from './member-list';
// import Clock from './clock';
// import { render, unmountComponentAtNode } from 'react-dom';
// import HiddenMessages from './hidden-messages';
// import { Display, WhenFalsy, WhenTruthy } from './display'; 
// import CountryList from './country-list';
// import RandomMeUsers from './random-users';
// import CountryDropdown from './country-names';
// import PeopleList from './people-list';
// import Timeline from './time-line';
// import historicDatesForSkiing from '../data/timeline-data';
// import '../styles/star.css';
// import PopupButton from './menu-button';
// import ContactList from './contacts-list';
// import contacts from '../data/contacts';

//const target = document.getElementById('root');
class App extends Component {

    constructor(){
        super();
        // this.state = {
        //     colors: []
        // };
        // this.addColor = this.addColor.bind(this);
        // this.rateColor = this.rateColor.bind(this);
        // this.removeColor = this.removeColor.bind(this);
    }

    // addColor(title, color) {
    //     const colors = [
    //         ...this.state.colors, 
    //         {
    //             id: v4(),
    //             title,
    //             color,
    //             rating:0
    //         }
    //     ];
    //     this.setState({colors});
    // }

    // rateColor(id, rating) {
    //     const colors = this.state.colors.map( color => 
    //         (color.id !== id) ?
    //             colors : 
    //             {
    //                 ...colors,
    //                 rating
    //             }
    //     );
    //     this.setState({colors});
    // }

    // removeColor(id) {
    //     const colors = this.state.colors.filter( color => 
    //         (color.id !== id)
    //     );
    //     this.setState({colors})
    // }

    
    render() {
        // const { addColor, rateColor, removeColor } = this;
        // const { colors } = this.state;
        // const time = {
            //     hours:"",
            //     minutes:"",
            //     seconds:"",
            //     timeOfDay:""
            // };
        // const age = 22;
        return (
        <div className="App">
            <header className="App-header">
            {/* <ContactList contacts={contacts}/> */}
            {/* <PopupButton hidden={true} txt="Toggle popup">
                <h1>Hidden Content</h1>
                <p>This content wall start off hidden</p>
            </PopupButton> */}
            {/* <CountryDropdown selected="Iran"/> */}
            {/* <RandomMeUsers count={100} /> */}
            {/* <PeopleList></PeopleList> */}
            {/* <Timeline name="History of Siking" data={historicDatesForSkiing}/> */}
            {/* <CountryList/> */}
            {/* <Display ifTruthy={age >= 21}>
                <WhenTruthy>
                    <h1>You Can Enter</h1>
                </WhenTruthy>
                <WhenFalsy>
                    <h1>Bit it Kid</h1>
                </WhenFalsy>
            </Display> */}
            {/* <Clock {...time} onClose={ () => unmountComponentAtNode(target) }/> */}
            {/* {/* <MemberList count={5}/> */}
            {/* <HiddenMessages/> */}
            {/* <AddColorForm onNewColor={addColor}/>
            <ColorList colors={colors} onRemove={removeColor} onRate={rateColor}/>  */}
            </header>
        </div>
        );
    }
}

export default App;
