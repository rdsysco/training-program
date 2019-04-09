import React from 'react';


class ColorRate extends React.Component {

    render() {
        
        let id = this.props.id;
        let rates = this.props.rates || [];
        let avg = 0;
        
        if (rates.length) {

            let sum = 0;
            rates.map((rate) => sum += rate);
            avg = sum / rates.length;

        }
        else {

            avg = 0;

        }

        return (
            <div>
                <span>Rate: {avg}</span>
                <button type="button" style={(avg >= 1) ? { backgroundColor: "red" } : { backgroundColor: "black" }} onClick={() => this.props.rateHandler(id, 1)}>1</button>
                <button type="button" style={(avg >= 2) ? { backgroundColor: "red" } : { backgroundColor: "black" }} onClick={() => this.props.rateHandler(id, 2)}>2</button>
                <button type="button" style={(avg >= 3) ? { backgroundColor: "red" } : { backgroundColor: "black" }} onClick={() => this.props.rateHandler(id, 3)}>3</button>
                <button type="button" style={(avg >= 4) ? { backgroundColor: "red" } : { backgroundColor: "black" }} onClick={() => this.props.rateHandler(id, 4)}>4</button>
                <button type="button" style={(avg >= 5) ? { backgroundColor: "red" } : { backgroundColor: "black" }} onClick={() => this.props.rateHandler(id, 5)}>5</button>
            </div>
        )
    }
}

export default ColorRate