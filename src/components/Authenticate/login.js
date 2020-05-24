import React from "react";
import LoginForm from "./forms/login-form";
import { login } from "../../store/authenticate/action";
import { connect } from "react-redux";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
        };
    }

    signIn = (values) => {
        this.props.login(values, (outcome) => {
            this.setState({result: outcome.result})
        });
    };

    render() {
        return <LoginForm signIn={this.signIn} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
