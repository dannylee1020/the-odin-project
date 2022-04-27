// import React, { Component } from 'react'
import React, { useState, useEffect } from 'react'
import uniqid from "uniqid";

const WorkExpModal = (props) => {
    const [workExp, setWorkExp] = useState({
        jobTitle: '',
        companyTitle: '',
        date: '',
        location: '',
        description: '',
        id: ''
    });

    const handleChange = (e) => {
        setWorkExp(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const work = {
            jobTitle:workExp.jobTitle,
            companyTitle: workExp.companyTitle,
            date: workExp.date,
            location: workExp.location,
            description: workExp.description,
            id: uniqid()
        }

        props.addWorkHist(work);
        setWorkExp({
            jobTitle: '',
            companyTitle: '',
            date: '',
            location: '',
            description: '',
            id: ''
        })
    }

    if(!props.display) {
        return null
    }

    return (
        <div>
            <form className='flex flex-col gap-2 border-2 p-2 mt-4 rounded-md' onSubmit = {(e) => {handleSubmit(e); props.closeModal()}}>
                <div className='flex flex-col'>
                    <label>Job Title</label>
                    <input type='text' name='jobTitle' onChange={handleChange} className='border-2 rounded-md h-8'></input>
                </div>
                <div className='flex flex-col'>
                    <label>Company</label>
                    <input type='text' name='companyTitle' onChange={handleChange} className= 'border-2 rounded-md h-8'></input>
                </div>
                <div className = 'flex flex-col'>
                    <label>Date <span className='text-[14px]'> (MM/DD/YYYY - MM/DD/YYYY)</span></label>
                    <input type='text' name='date' onChange={handleChange} className='border-2 rounded-md h-8'></input>
                </div>
                <div className = 'flex flex-col'>
                    <label>Location</label>
                    <input type='text' name='location' onChange={handleChange} className='border-2 rounded-md h-8'></input>
                </div>
                <div className = 'flex flex-col'>
                    <label>Description</label>
                    <textarea name='description' onChange={handleChange} className='border-2 rounded-md h-32'></textarea>
                </div>
                <div className = 'flex gap-2'>
                    <input type='submit' value='Save' className='border-2 rounded-md text-white bg-[#7B9ACC] py-2 px-3'></input>
                    <button type='button' onClick = {props.closeModal} className='border-2 rounded-md text-[#7B9ACC] py-2 px-2'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default WorkExpModal




// class WorkExpModal extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             jobTitle: '',
//             companyTitle: '',
//             date: '',
//             location: '',
//             description: '',
//             id: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     };

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const workExp = {
//             jobTitle: this.state.jobTitle,
//             companyTitle: this.state.companyTitle,
//             date: this.state.date,
//             location: this.state.location,
//             description: this.state.description,
//             id: uniqid()
//         }

//         this.props.addWorkHist(workExp);
//         this.setState({
//             jobTitle: '',
//             companyTitle: '',
//             date: '',
//             location: '',
//             description: '',
//             id: '',
//         })
//     };


//     render() {
//         if(!this.props.display) {
//             return null;
//         }

//         return (
//             <div>
//                 <form className='flex flex-col gap-2 border-2 p-2 mt-4 rounded-md' onSubmit = {(e) => {this.handleSubmit(e); this.props.closeModal()}}>
//                     <div className='flex flex-col'>
//                         <label>Job Title</label>
//                         <input type='text' name='jobTitle' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
//                     </div>
//                     <div className='flex flex-col'>
//                         <label>Company</label>
//                         <input type='text' name='companyTitle' onChange={this.handleChange} className= 'border-2 rounded-md h-8'></input>
//                     </div>
//                     <div className = 'flex flex-col'>
//                         <label>Date <span className='text-[14px]'> (MM/DD/YYYY - MM/DD/YYYY)</span></label>
//                         <input type='text' name='date' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
//                     </div>
//                     <div className = 'flex flex-col'>
//                         <label>Location</label>
//                         <input type='text' name='location' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
//                     </div>
//                     <div className = 'flex flex-col'>
//                         <label>Description</label>
//                         <textarea name='description' onChange={this.handleChange} className='border-2 rounded-md h-32'></textarea>
//                     </div>
//                     <div className = 'flex gap-2'>
//                         <input type='submit' value='Save' className='border-2 rounded-md text-white bg-[#7B9ACC] py-2 px-3'></input>
//                         <button type='button' onClick = {this.props.closeModal} className='border-2 rounded-md text-[#7B9ACC] py-2 px-2'>Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }
// export default WorkExpModal;