import React from 'react';
import PropTypes from 'prop-types'

function getText(value) {
    if (value === "open") {
        return "Open";
    }
    else {
        return "Close"
    }
}

function IssueStateComponent(props) {
    // TODO: implement icon template

    return <span>{getText(props.value)}</span>
}

IssueStateComponent.propTypes = {
    value: PropTypes.oneOf(["open", "close"]).isRequired,
    template: PropTypes.oneOf(["icon", "text", "icon-and-text"])
}

IssueStateComponent.defaultProps = {
    template: "icon"
}

export default IssueStateComponent;