import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./forms/login-form";
import Forgot from "./forms/forgot-form";
import Register from "./forms/register-form";
import NavBar from "./nav-bar";

export class Authenticate extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <Router>
                    <Switch>
                        <Route path="/signin">
                            <Login />
                        </Route>
                        <Route path="/forgot">
                            <Forgot />
                        </Route>
                        <Route path="/signup">
                            <Register />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Authenticate;
