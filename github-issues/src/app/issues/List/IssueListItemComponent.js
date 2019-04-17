import React from 'react';
import PropTypes from 'prop-types';
import Label from "../../common/IssueLabelComponent";

function IssueListItemComponent(props) {
    let closed = props.state === "close";

    return (
        <div className="d-flex flex-row justify-content-between p-2">
            <div className={`${closed ? "text-danger" : "text-success"}`}>
                <i className="fas fa-exclamation-circle"></i>
            </div>
            <div className="d-flex flex-column flex-grow-1 pl-1 pr-2 text-wrap">
                <div>
                    <span>{props.title}</span>
                    {
                        props.labels.map((label) => <Label key={label.id} {...label} />)
                    }
                </div>
                <span className="text-secondary">#{props.number}</span>
            </div>
            {
                props.comments > 0 && (
                    <div>
                        <i className="far fa-comment-alt"></i>
                        <span className="pr-1 pl-1">{props.comments}</span>
                    </div>
                )
            }
        </div>
    )
}

IssueListItemComponent.propTypes = {
    state: PropTypes.oneOf(["close", "open"]).isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    labels: PropTypes.arrayOf(PropTypes.shape({
        // TODO:
    })).isRequired,
    author: PropTypes.shape({

    }),
    milestone: PropTypes.shape({

    })
}

export default IssueListItemComponent;