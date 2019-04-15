/**
 * Issue actions
 */

import types from "./types";

export default {
    issueListBegin: (owner, repo) => {
        return {
            type: types.ISSUE_LIST_BEGIN,
            owner,
            repo
        }
    },

    issueListSuccess: (owner, repo, payload) => {
        return {
            type: types.ISSUE_LIST_SUCCESS,
            owner,
            repo,
            payload
        }
    },

    issueListFail: (owner, repo, error) => {
        return {
            type: types.ISSUE_LIST_FAIL,
            owner,
            repo,
            error
        }
    }
}