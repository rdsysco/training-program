import React from 'react'
import PropTypes from 'prop-types'

import IssueStateComponent from "../../common/IssueStateComponent"
import IssueCommentCountComponent from "../../common/IssueCommentCountComponent"

function PinCardComponent (props) {

    return(
        <div>
            <h3>{props.title}</h3>
            <span>#{props.number} opened on {props.createDcreated_atate} by {props.user.login}</span>
            <IssueStateComponent value={props.state} template={"icon-and-text"} />
            { props.comments > 0 && <IssueCommentCountComponent value={props.commensts} /> }
        </div>
    )
}

const PinboardComponent = function(props) {

    if (props.items.length) {

        return (
            <div>
            {
                props.items.map((item) => <PinCardComponent {...item} />)
            }
            </div>
        )

    }
    else {
        return null
    }
}

PinboardComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        number: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.oneOf(["open", "close"]),
        comments: PropTypes.number.isRequired,
        user: PropTypes.shape({
            login: PropTypes.string.isRequired
        }).isRequired,
        created_at: PropTypes.string.isRequired // TODO: handle date time with prop types
    }))
}

export default PinboardComponent;