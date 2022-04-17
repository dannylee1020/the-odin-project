import React, { Component } from 'react';

class WorkExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            jobTitle,
            companyTitle,
            date,
            location,
            description
        } = this.props.work

        return (
            <div>
                <h4>{jobTitle}</h4>
                <p>{companyTitle}</p>
                <p>{date}</p>
                <p>{location}</p>
                <p>{description}</p>
            </div>
        )
    }

}

export default WorkExp;