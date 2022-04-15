import React, { Component } from 'react'


class AddExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button onClick={this.props.displayModal}>
                <span>+</span> Add Experience
            </button>
        )
    }
}

export default AddExp;