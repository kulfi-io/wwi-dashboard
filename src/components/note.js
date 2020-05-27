import React from "react";

export class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-testid="note" id="note" className="form-note">
                {this.props.note}
            </div>
        );
    }
}


export default Note;
