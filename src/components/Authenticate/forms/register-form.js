import React from "react";
import { Field, reduxForm, reset } from "redux-form";
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Button,
    Link,
} from "@material-ui/core";
import { renderTextField } from "./index";
import validator from "../auth-validate";

const registerForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card data-testid="card" className="auth">
            <CardHeader data-testid="header" title="Register" />
            <CardContent data-testid="content">
                <form
                    id="registerForm"
                    data-testid="register-form"
                    onSubmit={handleSubmit(props.register)}
                >
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                name="firstName"
                                data-testid="firstName"
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
                                data-testid="lastName"
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
                                data-testid="email"
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
                                data-testid="password"
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
                                data-testid="confirm"
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        alignItems="center"
                        justify="space-between"
                        style={{ marginTop: "10px" }}
                    >
                        <Grid item>
                            <Link data-testid="login" variant="body1" href="/signin">
                                Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                alignItems="center"
                                justify="space-between"
                            >
                                <Grid item>
                                    <Button
                                        data-testid="reset"
                                        disabled={pristine || submitting}
                                        variant="text"
                                        type="button"
                                        onClick={reset}
                                    >
                                        Reset
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        data-testid="register"
                                        disabled={submitting}
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                    >
                                        Register
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

const afterSubmit = (result, dispatch) => dispatch(reset("registerForm"));

export default reduxForm({
    form: "Register",
    validate: validator,
    onSubmitSuccess: afterSubmit
})(registerForm);
