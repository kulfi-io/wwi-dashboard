import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./login"
import Forgot from "./forgot";
import Register from "./register";
import Splash from '../splash';
import NotFound from '../not-found';
import NavBar from "./nav-bar";

export class Authenticate extends React.Component {
    render() {
        return(
            <div data-testid="authenticate">
                <NavBar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Splash}/>
                        <Route path="/signin" component={Login}/>
                        <Route path="/forgot" component={Forgot}/>
                        <Route path="/signup" component={Register} />
                        <Route component={NotFound}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Authenticate;
