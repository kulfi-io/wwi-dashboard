import { authConstants as CONSTANTS } from "./constants";

export const login = (user) => ({
    type: CONSTANTS.LOGIN,
    result: {},
    payload: user,
});

export const logout = (user) => ({
    type: CONSTANTS.LOGOUT,
    result: {},
    payload: user,
});

export const verify = (user) => ({
    type: CONSTANTS.VERIFY,
    result: {},
    payload: user,
});

export const register = (user) => ({
    type: CONSTANTS.REGISTER,
    result: {},
    payload: user,
});
