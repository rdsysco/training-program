import IssueListComponent from "./IssueListComponent"
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(IssueListComponent);