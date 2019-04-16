import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/input';
import ColorInput from './components/color-input';
import Button from './components/button';
import CardList from './components/card-list'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cardList: [
        {
          title: 'unTitle',
          colorValue: '#000000',
          rate: 0
        }
      ]
    };

    this.color = {title:'',colorValue: '', rate: 3};

    this.handelColorTitle = this.handelColorTitle.bind(this);
    this.handelColorValue = this.handelColorValue.bind(this);
    this.handelCardColor = this.handelCardColor.bind(this);
    
  }

  handelColorTitle(title){
    // this.setState({colorTitle: {
    //   text: title
    //   }
    // })
    this.color.title = title;
  }
  handelColorValue(colorValue){
    // this.setState({colorValues: {
    //   color: colorValue
    //   }
    // })
    this.color.colorValue = colorValue;
  }
  handelCardColor(cardColor){
    this.setState({cardList:[...this.state.cardList, {...this.color}]});
    this.color = {};

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Color Management App
          </p>
        </header>
        <div className="App-content"></div>
          <div>
            <Input handelChange={this.handelColorTitle} />
            <ColorInput handelChange={this.handelColorValue} />
            <Button onClick={this.handelCardColor} text="Add"></Button>
          </div>  
          <div>
            <CardList cards={this.state.cardList}></CardList>
          </div>
      </div>
    );
  }
}
export default App;
