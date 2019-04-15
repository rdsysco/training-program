import React from 'react'
import PropTypes from 'prop-types'

const TooltipComponent = function(props) {

    return (
        <div className="text-center mt-5 mb-5">
            <div className="d-flex d-flex-row justify-content-center mb-1">
                <h6>{props.title}</h6>
                <a href="/#" className="ml-auto">Dismiss</a>
            </div>
            <p className="pl-5 pr-5 text-wrap">{props.description}</p>
        </div>
    )

}

TooltipComponent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default TooltipComponent;