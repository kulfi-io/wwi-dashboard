import React from 'react';
import { Login } from './login';

export class Authenticate extends React.Component { 
    constructor(props) { 
        super(props);

        this.state = {
            login = <Login />,
            register = null,
            forgot = null
        }
    }

    render() { 

    }
}

Authenticate.defaultProps = {
    activeComponent: this.state.login
}

