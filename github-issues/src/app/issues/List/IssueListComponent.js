import React from 'react';
import PropTypes from 'prop-types';
import "./IssueList.css";

const IssueListComponent = function(props) {

    return (
        <div className="w-100">
            <div className="d-flex d-flex-row">
                Header
            </div>
            <div>
                {
                    props.items.map((item) => {
                        return <div key={item.id}>{JSON.stringify(item)}</div>
                    })
                }
            </div>
        </div>
    )

}

IssueListComponent.propTypes = {
    total: PropTypes.number.isRequired,
    openCount: PropTypes.number.isRequired,
    closeCount: PropTypes.number.isRequired,
    assignees: PropTypes.arrayOf(PropTypes.shape({

    })),
    milestones: PropTypes.arrayOf(PropTypes.shape({

    })),
    labels: PropTypes.arrayOf(PropTypes.shape({

    })),
    authors: PropTypes.arrayOf(PropTypes.shape({

    })),
    items: PropTypes.arrayOf(PropTypes.shape({

    })).isRequired
}

IssueListComponent.defaultProps = {
    total: 0,
    openCount: 0,
    closeCount: 0,
    items: []
}

export default IssueListComponent;