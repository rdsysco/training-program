import { connect } from 'react-redux'

import IssueComponent from "./IssuesComponent"
import { issueOperations } from "./duck"

const mapStateToProps = (state) => {
    return {
        ...state,
        issues: state.issues
    }
}

const mapDispatchToProps = (dispatch) => {

    const issueList = (owner, repo) => {
        dispatch(issueOperations.issueList(owner, repo))
    }

    return {
        issueList
    }
}

const IssueContainer = connect(mapStateToProps, mapDispatchToProps)(IssueComponent);

export default IssueContainer;