import { testConstants as CONSTANTS } from "./constants";

export const addTest = text => ({
    type: CONSTANTS.ADD_TEST,
    payload: text
});

export const deleteTest = text => ({
    type: CONSTANTS.DELETE_TEST,
    payload: text
});