/**
 * Operations
 */

import actions from "./actions";

export function issueList(owner, repo) {
    return (dispatch) => {

        // begin fetching data
        dispatch(actions.issueListBegin(owner, repo))

        // fetching data
        fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                else {
                    throw new Error(response.json())
                }
            })
            .then(json => dispatch(actions.issueListSuccess(owner, repo, json)))
            .catch(err => dispatch(actions.issueListFail(owner, repo, err)));

    }
}