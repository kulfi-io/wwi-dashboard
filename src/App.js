import React from "react";
import NavBar from "./components/nav-bar";
import Login from './components/Authenticate/login';
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <NavBar />
                    <Login />
                </div>

                {/* <div className="App-body">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome!</p>
                </div> */}
            </div>
        );
    }
}

export default App;
