import React from "react";
import ForgotForm from "./forms/forgot-form";

export class Forgot extends React.Component {
    render() {
        return (
            <div className="auth">
                <ForgotForm/>
            </div>
        )
    }
}

export default Forgot;
