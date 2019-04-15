import React from 'react';
import PropTypes from 'prop-types';
import "./Search.css";

class SearchComponent extends React.Component {
    constructor() {
        super();

        this.queryInput = React.createRef();
    }

    render() {

        return (
            <div className="d-flex justify-content-between app__issues__search">
                <div>
                    <select defaultValue="def" className="">
                        <option disabled value="def" hidden>Filter</option>
                        <option>Open issues and pull requests</option>
                        <option>Your issues</option>
                        <option>Your pull requests</option>
                        <option>Everything assigned to you</option>
                        <option>Everything mentioning you</option>
                    </select>
                    <input type="text" defaultValue={this.props.query} ref={this.queryInput} />
                    <span className="ml-2">Lables: {this.props.labelsCount}</span>
                    <span className="ml-2">Milestones: {this.props.milestonesCount}</span>
                </div>
                <div>
                    <a href="/" className="btn btn-primary">New issue</a>
                </div>
            </div>
        )

    }
}

SearchComponent.propTypes = {
    query: PropTypes.string.isRequired,
    labelsCount: PropTypes.number.isRequired,
    milestonesCount: PropTypes.number.isRequired
}

SearchComponent.defaultProps = {
    query: "is:issue is:open",
    labelsCount: 0,
    milestonesCount: 0
}

export default SearchComponent;