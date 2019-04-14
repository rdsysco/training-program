import React, {Component} from 'react';
import data from "../data.json";

export default class Star extends Component {
  render() {
    let { star, handler,  title} = this.props.data;

      function increaseRate(i) {
        data.cards.map((item) => {
          if (item.title == title){
            item.star = i+1;
          }
        });
        handler(data);

      }

      let starRate = [];
        for (let i = 0; i < 5; i++) {
          starRate.push(<button key={i} style={{background: i<star ? 'green': ''}} onClick={increaseRate.bind(this,i)}>*</button>)
        }

        return(
          <div>
            {starRate}
          </div>
            )

    }
}