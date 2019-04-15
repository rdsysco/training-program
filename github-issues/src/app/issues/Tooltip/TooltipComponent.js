import React from 'react'
import PropTypes from 'prop-types'

const tooltipComponent = function(props) {

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )

}

tooltipComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default tooltipComponent;