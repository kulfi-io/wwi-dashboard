import React from "react";
import RegisterForm from "./forms/register-form";
import { register } from "../../store/authenticate/action";
import { connect } from "react-redux";

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: null,
        };
    }

    register = (values) => {
        this.props.register(values, (outcome) => {
            this.setState({ result: outcome.result });
        });
    };

    render() {
        return <RegisterForm  register={this.register} />;
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: (user) => dispatch(register(user)),
});

export default connect(null, mapDispatchToProps)(Register);
