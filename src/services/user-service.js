import { authConstants as CONSTANTS } from "../store/authenticate/constants";
import { v4 as uuidv4 } from "uuid";
import { status, statusMessage } from '../constants';

export class UserService {
    
    addUser = (action) => {
        let exists, registered;
        let _user = action.payload;
        registered = JSON.parse(localStorage.getItem("registered"));

        if (registered)
            exists = registered.filter((x) => x.email === _user.email);
        else registered = [];

        if (!exists || exists.length === 0) {
            _user.id = uuidv4();
            registered.push(_user);

            localStorage.setItem("registered", JSON.stringify(registered));
            action.result = CONSTANTS.REGISTERED;
        } else {
            action.result = CONSTANTS.EXISTS;
        }
    };

    getUser = (action) => {
        const _result = {
            status: null,
            value: null
        }

        let exists, registered;
        const _user = action.payload;
        registered = JSON.parse(localStorage.getItem("registered"));
        if (registered)
            exists = registered.filter(
                (x) => x.email === _user.email && x.password === _user.password
            );

        if (exists && exists.length > 0) { 
            _result.status = status.PASSED;
            _result.value = exists[0].id;
            action.result = _result;
            action.error = false;
        } 
        else { 
            _result.status = status.FAILED;
            _result.value = statusMessage.INVALID_USER;
            action.result = _result;
            action.error = true;
        };
    };

    removeUser = (action) => {
        let exists, registered;
        const _user = action.payload;
        registered = JSON.parse(localStorage.getItem("registered"));
        if (registered)
            exists = registered.filter(
                (x) => x.email === _user.email && x.password === _user.password
            );

        if (exists.length > 0) {
            registered = registered.filter((x) => x.email === _user.email);
            localStorage.setItem("registered", JSON.stringify(registered));
            action.result = `${_user.email} ${CONSTANTS.REMOVED}`;
        }
    };
}

export default new UserService();
