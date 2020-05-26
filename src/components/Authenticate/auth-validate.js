import { heplerText } from "../../constants";
export default (values) => {
    const errors = {};

    const longEnough = (value) =>
        value && value.length > 0 && value.length < 3
            ? heplerText.MUST_BE_3_CHAR
            : undefined;
    
    const longEnoughPass = (value) =>
        value && value.length > 0 && value.length < 6
            ? heplerText.MUST_BE_6_CHAR
            : undefined;
    
    const email = (value) =>
        value && value.length > 0 && !/(.+)@(.+){2,}\.(.+){2,}/i.test(value)
            ? heplerText.INVALID_EMAIL
            : undefined;

    const match = (source, dest) =>
        source &&
        dest &&
        source.length > 0 &&
        dest.length > 0 &&
        source !== dest
            ? heplerText.INVALID_MATCH
            : undefined;

    errors.firstName = longEnough(values.firstName);
    errors.lastName = longEnough(values.lastName);
    errors.email = email(values.email);
    errors.password = longEnoughPass(values.password);
    errors.confirm = match(values.password, values.confirm);

    return errors;
};
