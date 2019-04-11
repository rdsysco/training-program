import React from 'react';
import PropTypes from 'prop-types'
import './Card.css'
import {Stars} from "../stars";
import LoggerHOC from '../../HOC/LoggerHOC';

class Card extends React.Component {
    changeRate(rate){

        const value = this.props.value;

        value.rate = rate;

        this.props.onChange && this.props.onChange(value);
    }
    render() {

        const {title = 'Empty', color = 'black', rate = 0} = this.props.value || {};

        return (
            <div className="card">
                <h1>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {title}
                    <button className="remove"
                            onClick={() => this.props.onRemove && this.props.onRemove()}>
                        X
                    </button>
                </h1>
                <div style={{backgroundColor: color}}
                     className="color">
                    &nbsp;
                </div>
                <Stars value={rate}
                       size={15}
                       count={5}
                       activeColor={'red'}
                       color={'gray'}
                       onChange={(rate) => this.changeRate(rate)}/>
                <label>
                    {`${rate} of 5 stars`}
                </label>
            </div>
        );
    }
}

Card.propTypes = {
    value: PropTypes.object
}

Card.defaultProps = {
    value: {}
}

const CardWithLogger = LoggerHOC(Card);

export {
    CardWithLogger as Card
}