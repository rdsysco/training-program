
import React from 'react';
import PropTypes from 'prop-types'

class SearchComponent extends React.Component {
    constructor() {
        super();

        this.queryInput = React.createRef();
    }

    render() {

        return (
            <div>
                <select>
                    <option>Open issues and pull requests</option>
                    <option>Your issues</option>
                    <option>Your pull requests</option>
                    <option>Everything assigned to you</option>
                    <option>Everything mentioning you</option>
                </select>
                <input type="text" defaultValue={this.props.query} ref={this.queryInput} />
            </div>
        )

    }
}

SearchComponent.propTypes = {
    query: PropTypes.string.isRequired,
}

SearchComponent.defaultProps = {
    query: "is:issue is:open"
}

export default SearchComponent;