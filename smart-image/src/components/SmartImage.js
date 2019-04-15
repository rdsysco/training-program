import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class SmartImage extends Component{

    static propTypes = {
        src        : PropTypes.string,
        lazySrc    : PropTypes.string,
        defaultSrc : PropTypes.string,
        alt        : PropTypes.string,
        aspectRatio: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        contain    : PropTypes.bool,
        gradient   : PropTypes.string,
        height     : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        width      : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        position   : PropTypes.string,
        minHeight  : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxHeight  : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        minWidth   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        maxWidth   : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        transition : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        // sizes
        // srcset
    }

    static defaultProps = {
        src        : undefined,
        lazySrc    : undefined,
        defaultSrc : undefined,
        alt        : undefined,
        aspectRatio: undefined,
        contain    : false,
        gradient   : undefined,
        height     : undefined,
        width      : undefined,
        position   : 'center center',
        minHeight  : undefined,
        maxHeight  : undefined,
        minWidth   : undefined,
        maxWidth   : undefined,
        transition : 'fade-transition',
        // sizes
        // srcset
    }

    render(){
        return(
            <div>
                smart image
            </div>
        );
    }
}