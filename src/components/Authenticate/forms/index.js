import React from "react";
import { TextField } from "@material-ui/core";

export const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    let errorText = error;
    error = error === undefined ? undefined : true;

    errorText = !errorText ? ' ' : errorText;
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
