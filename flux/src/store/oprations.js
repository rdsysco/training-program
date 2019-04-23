import { notesLoading, noteSuccess, noteError } from './actions'

export const getNotes = () => {
    return (dispatch) => {
        try {
            dispatch(notesLoading());
            setTimeout(() => {
                dispatch(noteSuccess());
            }, 2000);
        }
        catch (erro) {
            dispatch(noteError());
        }
    }
}