import React, { Component } from 'react'

class AddEdu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button className='mt-1 text-[#7B9ACC]' onClick={this.props.displayModal}>
                <span>+</span> Add Education
            </button>
        )
    }
}

export default AddEdu;