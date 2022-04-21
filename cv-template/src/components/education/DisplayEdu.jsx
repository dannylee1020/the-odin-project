import React, { Component } from 'react'
import EduInfo from './EduInfo';

class DisplayEdu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.educations.map((edu) => {
                return <EduInfo key={edu.id} education={edu} removeHist={this.props.removeHist}></EduInfo>
            })
        )

    }
}

export default DisplayEdu;