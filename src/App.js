import React from "react";
import logo from "./logo.png";
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome to wwi-dashboard, please login/register to
                        continue
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Login/Register
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
