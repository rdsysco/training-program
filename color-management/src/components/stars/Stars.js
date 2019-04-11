import React from 'react';
import PropTypes from 'prop-types'
import './Stars.css'

export class Stars extends React.Component {
    onClick(index) {

        this.props.onChange && this.props.onChange(index + 1);
    }

    render() {
        return (
            <ul className="stars"
                style={{fontSize: `${this.props.size}px`}}>
                {
                    Array(this.props.count)
                        .fill(0)
                        .map((item, index) => {

                            const
                                isActive = index < this.props.value,
                                color = isActive ? this.props.activeColor : this.props.color;

                            return (
                                <li key={index}
                                    className={isActive ? 'active' : ''}
                                    style={{
                                        color      : color,
                                        borderColor: color
                                    }}
                                    onClick={this.onClick.bind(this, index)}/>
                            )
                        })
                }
            </ul>
        );
    }
}

Stars.propTypes = {
    activeColor: PropTypes.string,
    color: PropTypes.string,
    count: PropTypes.number,
    size: PropTypes.number,
    value: PropTypes.number
}

Stars.defaultProps = {
    activeColor: 'red',
    color: 'black',
    count: 5,
    size: 10,
    value: 0
}
