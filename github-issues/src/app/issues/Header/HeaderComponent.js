import React from 'react'
import PropTypes from 'prop-types';
import "./Header.css"

const HeaderComponent = function(props) {

    return (
        <div className="d-flex d-flex-row justify-content-between pt-2 w-100 app__issues__header">
            <div className="d-flex d-flex-row align-items-center">
                <i className="fas fa-book mr-2"></i>
                <div>{props.repo} / {props.owner}</div>
            </div>
            <div className="d-flex d-flex-row align-items-center">
                <span className="mr-2">Watch: {props.watchers_count}</span>
                <span className="mr-2">Star: {props.stargazers_count}</span>
                <span className="mr-2">Fork: {props.forks_count}</span>
            </div>
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