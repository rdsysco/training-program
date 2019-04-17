import React from 'react';
import PropTypes from "prop-types";

function IssueLabelComponent(props) {
    return (
        <span className="badge ml-1" style={{ backgroundColor: `#${props.color}`}}>{props.name}</span>
    )
}

IssueLabelComponent.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default IssueLabelComponent;