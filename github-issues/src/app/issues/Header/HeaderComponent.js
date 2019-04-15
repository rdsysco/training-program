import React from 'react'
import PropTypes from 'prop-types';

const HeaderComponent = function(props) {

    return (
        <div>
            <div>{props.repo} / {props.owner}
            </div>
            <span>Watch: {props.watchers_count}</span>
            <span>Star: {props.stargazers_count}</span>
            <span>Fork: {props.forks_count}</span>
        </div>
    )
}


HeaderComponent.propTypes = {
    owner: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    watchers_count: PropTypes.number,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number
}

HeaderComponent.defaultProps = {
    watchers_count: 0,
    stargazers_count: 0,
    forks_count: 0
}

export default HeaderComponent