// State argument is not application state - only the state this reducer is responsible for
// all reducers get two arguments - current state and action
// if state argument is undefined, set it to default null
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    return state
}