import React from "react";
import logo from "./logo.png";
import NavBar from "./components/nav-bar";
import "./App.css";


export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <NavBar />
                <div className="App-body">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Welcome!</p>
                </div>
            </div>
        );
    }
}

export default App;
