const initialState = {
    notes: [
        {
            id: '1',
            title: 'T1',
            details: 'd1'
        },
        {
            id: '2',
            title: 'T2',
            details: 'd2'
        },
        {
            id: '3',
            title: 'T3',
            details: 'd3'
        }
    ],
    name: 'Masood'
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            }
        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.note)
            }
        case 'GET_NOTES':
            return {
                ...state,
            }
        default:
            return state
    }
}