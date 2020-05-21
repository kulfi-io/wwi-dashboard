import React from "react";
import { TextField} from "@material-ui/core";

export const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    const errorText = error;
    error = error === undefined ? undefined : true;

    return (
        <TextField
            label={label}
            fullWidth
            helperText={errorText}
            error={touched && error}
            {...input}
            {...custom}
        />
    );
};

