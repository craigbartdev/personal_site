import uuid from 'uuid';

const commentsReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [
                { cid: uuid.v4(), nid: action.nid, date: action.date, comment: action.comment},
                ...state
            ]
        case 'REMOVE_COMMENT':
            return state.filter(comment => comment.cid !== action.cid)
        case 'CLEAR_NOTE_COMMENTS':
            return state.filter(comment => comment.nid !== action.nid)
        case 'POPULATE_COMMENTS':
            return action.comments
        default:
            return state
    }
}

export default commentsReducer;