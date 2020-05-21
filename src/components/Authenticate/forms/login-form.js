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
        <Card data-testid="card">
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
                        <Grid item>
                            <Link href="/forgot" variant="body2">
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
                                data-testid="login"
                                disabled={pristine || submitting}
                                variant="contained"
                                type="submit"
                            >
                                Login
                            </Button>
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


