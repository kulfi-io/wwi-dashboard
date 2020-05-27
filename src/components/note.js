import React from 'react';

export class Note extends React.Component { 
    constructor(props) { 
        super(props);

        this.state = { 
            note: this.props.note
        }
    }

    render() { 
        return(
            <div data-testid="note" id="note">
                {this.state.note}
            </div>
        )
    }
}

Note.defaultProps = {
    note: ''
}

export default Note;
