import PinboardComponent from "./PinboardComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {

    // TODO:
    return {
        items: []
    }

}

export default connect(mapStateToProps)(PinboardComponent);