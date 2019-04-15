/**
 * Issue list reducer
 */

import types from "./types"

const initialState = {
    loading: true,
    error: null,
    data: {
        owner: "visionmedia",
        repo: "debug"
    }
}

export default function(state = initialState, action) {

    switch (action.type) {
        case types.ISSUE_LIST_BEGIN:
            return {
                ...state,
                loading: true,
                data: {
                    owner: action.owner,
                    repo: action.repo
                }
            };
        
        case types.ISSUE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: {
                    owner: action.owner,
                    repo: action.repo,
                    payload: action.payload
                }
            };

        case types.ISSUE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                data: {
                    owner: action.owner,
                    repo: action.repo
                }
            };

        default:
            return state;
    }

}