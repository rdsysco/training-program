export const getInitialNotes = () => {
    return {
        type: 'GET_NOTES'
    }
}

export const addNewNote = (note) => {
    return {
        type: 'ADD_NOTE',
        note
    }
}

export const removeNote = (note) => {
    return {
        type: 'REMOVE_NOTE',
        note
    }
}

export const notesLoading = () => {
    return {
        type: 'NOTES_LOADING'
    }
}

export const noteSuccess = () => {
    return {
        type: 'NOTES_SUCCESS'
    }
}

export const noteError = () => {
    return {
        type: 'NOTES_ERROR'
    }
}