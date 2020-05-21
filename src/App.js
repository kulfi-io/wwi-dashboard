import React from "react";
import NavBar from "./components/nav-bar";
import Register from './components/Authenticate/register';
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <NavBar />
                    <Register/>
                </div>

            </div>
        );
    }
}

export default App;
