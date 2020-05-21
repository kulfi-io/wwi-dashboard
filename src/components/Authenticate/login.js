import React from "react";
import LoginForm from "./forms/login-form";

export class Login extends React.Component {
    render() {
        return (
            <div className="auth">
                <LoginForm />
            </div>
        );
    }
}

export default Login;
