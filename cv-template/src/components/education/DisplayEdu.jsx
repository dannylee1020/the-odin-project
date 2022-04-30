import React from 'react'

const DisplayEdu = (props) => {
    const edus = props.educations;

    return (
        edus.map((edu) => {
            return (
                <div className='hover:bg-slate-200 rounded-md py-2 mb-10 mt-5 flex justify-between'>
                    <div className='work-hist flex flex-col'>
                        <p className='text-lg font-bold'>{edu.school}</p>
                        <p className='text-base'>{edu.degree}</p>
                        <p className='text-base'>{edu.major}</p>
                        <p className='text-base'>{edu.location}</p>
                        <p className='text-slate-400 text-sm'>{edu.date}</p>
                    </div>
                    <i className="fa-solid fa-xmark text-[20px]" onClick={props.removeHist.bind(this, edu.id)}></i>
                </div>
            )
        })
    )
}

export default DisplayEdu;
