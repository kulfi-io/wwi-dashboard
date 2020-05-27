import React from "react";
import LoginForm from "./forms/login-form";
import { login } from "../../store/authenticate/action";
import { connect } from "react-redux";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: {
                status: "",
                value: "",
            },
        };

        this.clearNote = document.addEventListener("keypress", this.clearNote);
    }

    clearNote = (e) => {
        if (this.state.result.value !== "") {
            const _result = this.state.result;

            _result.status = "reset";
            _result.value = "";

            this.setState({ result: _result });
        }
    };

    signIn = (values) => {
        let _result;
        try {
            _result = this.props.login(values).result;
            this.setState({ result: _result });
            values.email = "";
            values.password = "";
        } catch (error) {
            _result = this.state.result;
            _result.status = "Error";
            _result.value = error.message;

            this.setState({ result: _result });
            values.password = "";
        }
    };

    render() {
        return (
            <LoginForm signIn={this.signIn} note={this.state.result.value} />
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    name: "loginForm",
    login: (user) => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
