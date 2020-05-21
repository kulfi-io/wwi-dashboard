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

const forgotForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <Card data-testid="card">
            <CardHeader data-testid="header" title="Forgot Password" />
            <CardContent data-testid="content">
                <form data-testid="forgot-form" onSubmit={handleSubmit}>
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
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Link href="/signin" variant="body2">
                                Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Register
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
                                data-testid="send-link"
                                disabled={pristine || submitting}
                                variant="contained"
                                type="submit"
                            >
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
        </Card>
    );
};

export default reduxForm({
    form: 'forgot',
    validate: validator
})(forgotForm);


