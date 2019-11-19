import uuid from 'uuid';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ENTRY':
            //use trim on title to get rid of accidental whitespace
            //add newest to front of array to get it to show up first on list
            return [
                { id: uuid.v4(), title: action.title.trim(), date: action.date, body: action.body },
                ...state
            ]
        case 'REMOVE_ENTRY':
            return state.filter(entry => entry.id !== action.id)
        case 'POPULATE_BLOG':
            return action.entries
        default:
            return state
    }
}

export default blogReducer;