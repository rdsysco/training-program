import React from 'react';
import PropTypes from 'prop-types';
import "./IssueList.css";
import IssueListItem from "./IssueListItemComponent";
import IssueListHeader from "./IssueListHeaderComponent";

const IssueListComponent = function(props) {

    return (
        <div className="w-100 border">
            <IssueListHeader />
            <div>
                {
                    props.items.map((item) => {
                        return <IssueListItem key={item.id} {...item} />
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