import React, { Component } from 'react';
import AddColor from "./Color/AddColor";
import ColorList from "./Color/ColorList";
import Nanoid from 'nanoid';
import faker from 'faker';


class App extends Component {

  constructor() {
    super();

    this.state = {
      colors: []
    }

    for (let i = 0; i < 4; i++) {

      this.state.colors.push({
        id: Nanoid(),
        name: faker.commerce.color(),
        value: faker.internet.color(),
        rates: [Math.floor(Math.random() * 4) + 1],
      });
    
    }

    this.addColor = this.addColor.bind(this);
    this.deleteColor = this.deleteColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.editColor = this.editColor.bind(this);
  }

  updateState() {
    this.setState({
      colors: this.colors || []
    });
  }

  addColor(name, color) {

    let colors = Object.assign([], this.state.colors);
    
    colors.push({
      id: Nanoid(),
      rates: [],
      name: name,
      value: color
    });

    this.setState({
      colors: colors
    });
  }

  deleteColor(id) {

    let colors = Object.assign([], this.state.colors);

    colors = colors.filter((item) => item.id !== id);

    this.setState({
      colors: colors
    });
  }

  rateColor(id, value) {

    let colors = Object.assign([], this.state.colors);

    let color = colors.filter((item) => item.id === id)[0];

    if (color) {

      color.rates.push(value);

      this.setState({
        colors: colors
      });

    }
  }

  editColor(id, name, colorValue) {

    let colors = Object.assign([], this.state.colors);

    let color = colors.filter((item) => item.id === id);

    if (color) {

      color.name = name;
      color.value = colorValue;

      this.setState({
        colors: colors
      });

    }

  }

  render() {
    let colors = (this.state || {}).colors || [];

    return (
      <div className="App">

        <AddColor addHandler={this.addColor} />

        <ColorList colors={colors} deleteHandler={this.deleteColor} rateHandler={this.rateColor} />

      </div>
    );
  }
}

export default App;
