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
      colorTitle: {
        text: ''
      },
      colorValues: {
        color:''
      },
      cardList: {
        cardColor:''
      }
      
    };

    this.handelColorTitle = this.handelColorTitle.bind(this);
    this.handelColorValue = this.handelColorValue.bind(this);
    this.handelCardColor = this.handelCardColor.bind(this);
  }

  handelColorTitle(title){
    this.setState({colorTitle: {
      text: title
      }
    })
  }
  handelColorValue(colorValue){
    this.setState({colorValues: {
      color: colorValue
      }
    })
  }
  handelCardColor(cardColor){
    this.setState({cardList: {
      cardColor: cardColor
      }
    })
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
            <Button onClick={()=> console.log(this.state.colorValues.color)} text="Add"></Button>
          </div>  
          <div>
            <CardList></CardList>
          </div>
      </div>
    );
  }
}
export default App;
