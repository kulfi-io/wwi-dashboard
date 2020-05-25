import { heplerText} from '../../constants';
export default (values) => {
    const errors = {};

    // const required = (value) => (value ? undefined : "Required");
    const longEnough = (value) =>
        value && value.length >= 3 ? undefined : heplerText.MUST_BE_3_CHAR;
     const longEnoughPass = (value) =>
         value && value.length >= 6 ? undefined : heplerText.MUST_BE_6_CHAR;
    const email = (value) =>
        value && /(.+)@(.+){2,}\.(.+){2,}/i.test(value)
            ? undefined
            : heplerText.INVALID_EMAIL;
    
    
    const match = (source, dest) =>
        source && dest && source === dest
            ? undefined
            : heplerText.INVALID_MATCH;

    // const requiredFields = [
    //     "firstName",
    //     "lastName",
    //     "email",
    //     "password",
    //     "confirm",
    // ];
    // requiredFields.forEach((field) => {
    //     errors[field] = required(field);
    // });

    errors.firstName = longEnough(values.firstName);
    errors.lastName = longEnough(values.lastName);
    errors.email = email(values.email);
    errors.password = longEnoughPass(values.password)
    errors.confirm = match(values.password, values.confirm);

    return errors;
};
