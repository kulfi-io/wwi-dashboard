import React from "react";
import Authenticate from './components/Authenticate';
import "./App.css";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-body">
                    <Authenticate/>
                </div>

            </div>
        );
    }
}

export default App;
