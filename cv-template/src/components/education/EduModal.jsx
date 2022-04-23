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
                        <label>Date <span className='text-sm'>(MM/YYYY - MM/YYYY)</span></label>
                        <input type='text' name='date' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label for='degree'>Degree type</label>
                        <select name='degree' id='degree' onChange={this.handleChange} className='border-2 rounded-md h-8 text-sm'>
                            <option>None</option>
                            <option>High school or equivalent</option>
                            <option>Associate</option>
                            <option>Bachelor</option>
                            <option>Master</option>
                            <option>Doctorate</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className = 'flex flex-col'>
                        <label>Field of study</label>
                        <input type='text' name='major' onChange={this.handleChange} className='border-2 rounded-md h-8'></input>
                    </div>
                    <div className='flex flex-col'>
                        <label>City, State <span className='text-sm'>(ex. San Francisco, California)</span></label>
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