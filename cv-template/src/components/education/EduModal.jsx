import React, { Component } from 'react'
import uniqid from 'uniqid'

class EduModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            school: '',
            date: '',
            degree:'',
            major: '',
            location: '',
            id:'',
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const hist = {
            school: this.state.school,
            date: this.state.date,
            degree: this.state.degree,
            major: this.state.major,
            location: this.state.location,
            id: uniqid(),
        }

        this.props.addHist(hist);
        this.setState({
            school:'',
            date: '',
            degree: '',
            major: '',
            location: '',
            id: '',
        })
    }

    render() {
        if (!this.props.display) {
            return null
        }

        return(
            <div>
                <form className='flex flex-col gap-2 border-2 p-2 mt-4 rounded-md'onSubmit={(e) => {this.handleSubmit(e); this.props.closeModal()}}>
                    <div className='flex flex-col'>
                        <label>School</label>
                        <input type='text' name='school' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>Date</label>
                        <input type='text' name='date' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>Degree type</label>
                        <input list='degree' name='degree' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                        <datalist id='degree'>
                            <option value = 'High School or equivalent'></option>
                            <option value = 'Associate'></option>
                            <option value = "Bachelor's"></option>
                            <option value = "Master's"></option>
                            <option value = "Doctorate"></option>
                        </datalist>
                    </div>
                    <div className = 'flex flex-col'>
                        <label>Field of study</label>
                        <input type='text' name='major' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>City/State</label>
                        <input type='text' name='location' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex gap-2'>
                        <input type='submit' value='save' className='border-2 rounded-md text-white bg-[#7B9ACC] py-2 px-3'></input>
                        <button onClick={this.props.closeModal} type='button' className='border-2 rounded-md text-[#7B9ACC] py-2 px-2'>Cancel</button>
                    </div>
                </form>
            </div>
        )

    }
}

export default EduModal;