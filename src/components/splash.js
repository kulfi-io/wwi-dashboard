import React from 'react';
import logo from '../logo.png';

export class Splash extends React.Component { 
    render() { 
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome!</p>
            </div>
        );
    }
}

export default Splash;