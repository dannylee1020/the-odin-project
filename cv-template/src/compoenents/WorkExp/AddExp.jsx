import React, { Component } from 'react'


class AddExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button onClick={this.props.displayModal} className='mt-1 text-[#7B9ACC]'>
                <span>+</span> Add Experience
            </button>
        )
    }
}

export default AddExp;