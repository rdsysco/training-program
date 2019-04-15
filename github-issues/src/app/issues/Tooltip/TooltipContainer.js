import { connect } from 'react-redux'

import TooltipComponent from "./TooltipComponent"

const mapStateToProps = (state) => {

    return {
        title: "Want to submit an issue to visionmedia/debug?",
        description: "If you have a bug or an idea, browse the open issues before opening a new one. You can also take a look at the Open Source Guide."
    }

}

export default connect(mapStateToProps)(TooltipComponent);