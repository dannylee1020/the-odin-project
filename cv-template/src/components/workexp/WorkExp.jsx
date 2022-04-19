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
            description,
            id
        } = this.props.work


        return (
            <div className='hover:bg-slate-200 rounded-md py-2 mb-10 mt-5 flex justify-between'>
                <div className='work-hist flex flex-col'>
                    <p className='text-lg font-bold'>{jobTitle}</p>
                    <p>{companyTitle}</p>
                    <p>{date}</p>
                    <p>{location}</p>
                    <p>{description}</p>
                </div>
                <i className="fa-solid fa-xmark text-[20px]" onClick={this.props.removeHistory.bind(this, id)}></i>
            </div>
        )
    }

}

export default WorkExp;