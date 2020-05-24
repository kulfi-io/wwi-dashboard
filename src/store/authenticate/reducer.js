import { authConstants as CONSTANTS } from "./constants";
import UserService from '../../services/user-service'; 

const authReducer = (state = "", action) => {
    switch (action.type) {
        case CONSTANTS.REGISTER:
            UserService.addUser(action);
            return state;
            
        case CONSTANTS.LOGIN:
            UserService.getUser(action);
            return state;
        
        case CONSTANTS.LOGOUT:
            UserService.removeUser(action)
            return state;

        default:
            return state;
    }
};


export default authReducer;
