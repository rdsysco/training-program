import React from 'react';
import ColorCard from "./ColorCard";


class ColorList extends React.Component {

    render() {

        let colors = this.props.colors || [];

        let cards = [];
        colors.forEach(item => {

            cards.push(<ColorCard value={item} deleteHandler={this.props.deleteHandler} rateHandler={this.props.rateHandler} key={item.id} />);

        });

        return (
            <ul>
                {
                    // colors.forEach(item => {

                    //     return <ColorCard value={item} key={item.id} />
            
                    // })
                    cards
                }
            </ul>
        )
    }
}

export default ColorList