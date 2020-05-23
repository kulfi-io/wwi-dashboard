import React from "react";
import { Field, reduxForm } from "redux-form";
import {
    Card,
    CardHeader,
    CardContent,
    Grid,
    Button,
    Checkbox,
    FormControlLabel,
    Link
} from "@material-ui/core";
import { renderTextField } from "./index";
import validator from "../auth-validate";

const loginForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card data-testid="card" className="auth">
            <CardHeader data-testid="header" title="Login" />
            <CardContent data-testid="content">
                <form data-testid="login-form" onSubmit={handleSubmit}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item md={true} sm={true} xs={true}>
                            <Field
                                name="email"
                                autoFocus
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
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color="primary"
                                        data-testid="remenberMe"
                                    />
                                }
                                label="Remember me"
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
                            <Link variant="body2" href="/forgot">
                                Forgot Password ?
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
                                        data-testid="login"
                                        disabled={pristine || submitting}
                                        variant="contained"
                                        type="submit"
                                    >
                                        Login
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

export default reduxForm({
    form: 'Login',
    validate: validator
})(loginForm);


