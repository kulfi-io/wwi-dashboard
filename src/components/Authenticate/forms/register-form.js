import React from "react";
import { Field, reduxForm } from "redux-form";
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Button,
    Link
} from "@material-ui/core";
import { renderTextField } from "./index";
import validator from "../auth-validate";

const registerForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card data-testid="card">
            <CardHeader data-testid="header" title="Register" />
            <CardContent data-testid="content">
                <form data-testid="register-form" onSubmit={handleSubmit}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                name="firstName"
                                autoFocus
                                required
                                component={renderTextField}
                                label="First Name"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                name="lastName"
                                required
                                component={renderTextField}
                                label="Last Name"
                                type="text"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                name="email"
                                required
                                component={renderTextField}
                                label="Email"
                                type="email"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                required
                                name="password"
                                component={renderTextField}
                                label="Password"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                required
                                name="confirm"
                                component={renderTextField}
                                label="Confirm Password"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Link component="button" variant="body2">
                                Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link component="button" variant="body2">
                                Forgot Password ?
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        justify="space-between"
                        style={{ marginTop: "10px" }}
                    >
                        <Grid item>
                            <Button
                                data-testid="reset"
                                disabled={pristine || submitting}
                                variant="outlined"
                                type="button"
                                onClick={reset}
                            >
                                Reset
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                data-testid="register"
                                disabled={pristine || submitting}
                                variant="contained"
                                type="submit"
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default reduxForm({
    form: 'Register',
    validate: validator
})(registerForm);


