import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Login } from "./login";
import { Forgot } from "./forgot";
import { Register } from "./register";
import Navbar from "./nav-bar";

export class Authenticate extends React.Component {
    render() {
        return (
            <div className="authenticate">
                <Navbar />
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
