import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    makeStyles,
    Grid,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@material-ui/core";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: this.props.initialValues,
            validEmail: this.props.validEmail,
            validPass: this.props.validPass,
        };

        this.valididateEmail = this.valididateEmail.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    valididateEmail = (e) => {
        const val = e.target.value.trim();
        const _valid = this.state.validEmail;

        if (val === "") {
            _valid.status = false;
            _valid.text = "Email is required";
        }

        if (val && !this.props.emailPattern.test(val)) {
            _valid.status = false;
            _valid.text = "Email is invalid";
        }

        if (val && this.props.emailPattern.test(val)) {
            _valid.status = true;
            _valid.text = "email";
        }


        this.setState({ validEmail: _valid });
        this.setValues(e);
    };

    validatePassword = (e) => {
        const val = e.target.value.trim();
        const _valid = this.state.validPass;

        if (val === "") {
            _valid.status = false;
            _valid.text = "Password is required";
        }

        if (val && val.length < 6) {
            _valid.status = false;
            _valid.text = "A least 6 characters";
        }

        if (val && val.length >= 6) {
            _valid.status = true;
            _valid.text = "password";
        }

        this.setState({ validPass: _valid });
        this.setValues(e);
    };

    setValues = (e) => {
        const _values = this.state.values;

        switch (e.target.id) {
            case "email":
                _values.email = e.target.value;
                break;
            case "password":
                _values.password = e.target.value;
                break;
            default:
                break;
        }

        this.setState({ values: _values });
    };

    handleSubmit = (e) => {
        if (this.state.validEmail.status && this.state.validPass.status) { 
            console.log('worked');
        }
    };

    render() {
        return (
            <div data-testid="auth-login">
                <Card data-testid="card">
                    <CardHeader title="Login" data-testid="header" />
                    <CardContent data-testid="content">
                        <Grid container spacing={8} alignItems="center">
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField
                                    id="email"
                                    data-testid="email"
                                    label={this.state.validEmail.text}
                                    type="email"
                                    error={!this.state.validEmail.status}
                                    onChange={this.valididateEmail}
                                    onBlur={this.valididateEmail}
                                    fullWidth
                                    autoFocus
                                    require="true"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item md={true} sm={true} xs={true}>
                                <TextField
                                    id="password"
                                    data-testid="password"
                                    label={this.state.validPass.text}
                                    type="password"
                                    error={!this.state.validPass.status}
                                    onBlur={this.validatePassword}
                                    onChange={this.validatePassword}
                                    fullWidth
                                    require="true"
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            alignItems="center"
                            justify="space-between"
                        >
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
                                <Button
                                    data-testid="forgotPassword"
                                    disableFocusRipple
                                    disableRipple
                                    style={{ textTransform: "none" }}
                                    variant="text"
                                    color="primary"
                                >
                                    Forgot Password ?
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justify="center"
                            style={{ marginTop: "10px" }}
                        >
                            <Button
                                data-testid="login"
                                variant="outlined"
                                color="primary"
                                onClick={this.handleSubmit}
                            >
                                Login
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

Login.defaultProps = {
    classes: makeStyles((theme) => ({
        margin: { margin: theme.spacing.unit * 2 },
        padding: { padding: theme.spacing.unit },
    })),
    initialValues: { email: "", password: "" },
    emailPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validEmail: { status: true, text: "email" },
    validPass: { status: true, text: "password" },
};

export default Login;
