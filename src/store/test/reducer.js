import { testConstants as CONSTANTS } from './constants';

const initialState = {
    tests: []
};

const testReducer = (state = initialState, action) => { 
    switch (action.type) {
        case CONSTANTS.ADD_TEST:
            return {
                ...state,
                tests: [...state.tests, action.payload]
            };
        case CONSTANTS.DELETE_TEST:
            return {
                tests: [...state.tests.filter(x => x !== action.payload)]
            }
        default:
            return state;
    }
}

export default testReducer;
    