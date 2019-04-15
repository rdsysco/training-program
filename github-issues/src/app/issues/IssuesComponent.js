import React from 'react';

import Header from "./Header/HeaderContainer";
import Tooltip from "./Tooltip/TooltipContainer";
import Pinboard from "./Pinboard/PinboardContainer";
import Search from "./Search/SearchContainer";
import List from "./List/IssueListContainer";

class IssuesComponent extends React.Component {

    componentDidMount() {
        let owner = this.props.issues.data.owner;
        let repo = this.props.issues.data.repo;


        document.title = `Issues . ${owner}/${repo}`

        this.props.issueList(owner, repo);
    }

    render() {

        return (
            <div>
                <Header />
                <Tooltip />
                <Pinboard />
                <Search />
                <List />
            </div>
        )
        // return <div>{JSON.stringify(this.props)}</div>
    }
}

export default IssuesComponent;