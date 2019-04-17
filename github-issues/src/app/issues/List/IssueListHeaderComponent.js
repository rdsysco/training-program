import React from "react";

const IssueListHeader = function(props) {

    return (
        <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row">
                <div>
                    16 Open
                </div>
                <div>
                    418 Closed
                </div>
            </div>
            <div className="d-flex flex-row">
                <div>
                    Author
                </div>
                <div>
                    Lablels
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Milestones
                </div>
                <div>
                    Assignee
                </div>
                <div>
                    Sort
                </div>
            </div>
        </div>
    )
}

export default IssueListHeader;