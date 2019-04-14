import React, {Component} from 'react';
import data from "../data.json";

export default class Remove extends Component {
    render() {
      let { title, handler } = this.props.data;
      function removeCard(title,handler) {
        data.cards = data.cards.filter( function (item) {
          return item.title !== title
        });

        handler(data);
      }

        return(
                <button onClick={() => removeCard(title, handler)}> X </button>
            )

    }
}