import React, {Component} from 'react';
import Input from "./input";
import data from "../data.json";

export default class Add extends Component {
  addCard() {
    let newCard = {
      "title": this.refs.card_text.value,
      "color": this.refs.card_color.value,
      "star": 0
    }

    data.cards.push(newCard);

    this.props.handler(data);
  }
  render() {
        return(
                <div >
                  <input type="text" ref="card_text" placeholder="color title..." style={{ width:"50%", height:"30px",margin: "3%" }}/>
                  <input type="color" ref="card_color" style={{margin: "1%" }}/>
                  <button onClick={this.addCard.bind(this)} style={{margin: "1%" }}>ADD</button>
                </div>
            )

    }
}