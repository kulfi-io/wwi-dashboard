import { authConstants as CONSTANTS } from "../store/authenticate/constants";
import { v4 as uuidv4 } from "uuid";

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
        let exists, registered;
        const _user = action.payload;
        registered = JSON.parse(localStorage.getItem("registered"));
        if (registered)
            exists = registered.filter(
                (x) => x.email === _user.email && x.password === _user.password
            );

        if (exists.length > 0) action.result = exists[0].id;
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
