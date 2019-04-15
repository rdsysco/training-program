import SearchComponent from "./SearchComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    return {
        query: state.issues.data.query
    }
}

export default connect(mapStateToProps)(SearchComponent);