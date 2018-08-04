import { FETCH_WEATHER } from '../actions/index';

// Reducer always takes a state and an action. We are defaulting state to null here.
// Also need to import in combineReducers in reducers/index.js
export default function(state = [], action) {
    console.log("Action received", action);
    switch (action.type) {
        case FETCH_WEATHER:
            // Below is bad - never manipulate state directly
            // return state.push(action.payload.data);
            // return [ action.payload.data ];
            // Not mutating state, returning a new instance of state
            // return state.concat([action.payload.data]);
            // ES6 way
            return [action.payload.data, ...state ];
    }
    return state;
}

