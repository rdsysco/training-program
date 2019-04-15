import IssueListComponent from "./IssueListComponent"
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    return {
        items: state.issues.data.payload
    }
}

export default connect(mapStateToProps)(IssueListComponent);