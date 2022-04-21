import React, { Component } from 'react'

class EduInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            school,
            date,
            degree,
            major,
            location,
            id
        } = this.props.education;

        return(
            <div className='hover:bg-slate-200 rounded-md py-2 mb-10 mt-5 flex justify-between'>
                <div className='work-hist flex flex-col'>
                    <p className='text-lg font-bold'>{school}</p>
                    <p>{date}</p>
                    <p>{degree}</p>
                    <p>{major}</p>
                    <p>{location}</p>
                </div>
                <i className="fa-solid fa-xmark text-[20px]" onClick={this.props.removeHist.bind(this, id)}></i>
            </div>
        )

    }
}

export default EduInfo;