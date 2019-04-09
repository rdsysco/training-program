import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Star from './star';

class StarRating extends Component{

    constructor(props,){
        super(props);
        this.state = {
            starsSelected: props.starSelected || 0,
        };
        this.change = this.change.bind(this);
    }
    static propTypes = {
        totalStars: PropTypes.number
    };
    static defaultProps = {
        totalStars: 5
    };
    componentWillMount(){
        const {starsSelected} = this.props;
        if(starsSelected){
            this.setState({starsSelected});
        }
    }
    change(starsSelected) {
        console.log(starsSelected);
        this.setState({starsSelected})
    }
    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i)=>
                    <Star   key={i}
                            selected={i<starsSelected}    
                            onClick={() => this.change(i+1)}
                    />
                )}
                <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
}
export default StarRating;
