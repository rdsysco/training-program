import React from 'react';

class Rate extends React.Component {
    render() {
        return(
            <button onclick={this.prop}><i class='fa fa-star'></i></button>
        )
    }
}
export default Rate;