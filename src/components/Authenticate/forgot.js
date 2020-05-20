import React from "react";
import {
    Card,
    CardHeader,
    CardContent,
    makeStyles,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";

export class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            values: this.props.initialValues,
            validEmail: this.props.validEmail,
        };

        this.valididateEmail = this.valididateEmail.bind(this);
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


    setValues = (e) => {
        const _values = this.state.values;

        switch (e.target.id) {
            case "email":
                _values.email = e.target.value;
                break;
            default:
                break;
        }

        this.setState({ values: _values });
    };

    handleSubmit = (e) => {
        if (this.state.validEmail.status) {
            console.log("worked");
        }
    };

    render() {
        return (
            <Card data-testid="card">
                <CardHeader title="Forgot Email" data-testid="header" />
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
                    <Grid
                        container
                        alignItems="center"
                        justify="space-between"
                        style={{ marginTop: "10px" }}
                    >
                        <Grid item>
                            <Button
                                data-testid="login"
                                disableFocusRipple
                                disableRipple
                                style={{ textTransform: "none" }}
                                variant="text"
                                color="primary"
                            >
                                login ?
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                data-testid="send"
                                variant="outlined"
                                color="primary"
                                onClick={this.handleSubmit}
                            >
                                send link
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

ForgotPassword.defaultProps = {
    classes: makeStyles((theme) => ({
        margin: { margin: theme.spacing.unit * 2 },
        padding: { padding: theme.spacing.unit },
    })),
    initialValues: { email: ""},
    emailPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    validEmail: { status: true, text: "email" },
};

export default ForgotPassword;
