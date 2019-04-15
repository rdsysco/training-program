import { connect } from 'react-redux'

import HeaderComponent from "./HeaderComponent"

const mapStateToProps = (state) => {

    return {
        owner: state.issues.data.owner,
        repo: state.issues.data.repo
    }

}

export default connect(mapStateToProps)(HeaderComponent);