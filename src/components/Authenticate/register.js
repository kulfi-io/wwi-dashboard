import React from "react";
import RegisterForm from "./forms/register-form";

export class Register extends React.Component {
    render() {
        return (
            <div className="auth">
                <RegisterForm />
            </div>
        );
    }
}

export default Register;
