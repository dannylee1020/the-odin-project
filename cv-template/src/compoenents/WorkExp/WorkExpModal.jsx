import React, { Component } from 'react'

class WorkExpModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobTitle: '',
            companyTitle: '',
            date: '',
            location: '',
            description: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const workExp = {
            jobTitle: this.state.jobTitle,
            companyTitle: this.state.companyTitle,
            date: this.state.date,
            location: this.state.location,
            description: this.state.description
        }

        this.props.addExp(workExp);
        this.setState({
            jobTitle: '',
            companyTitle: '',
            date: '',
            location: '',
            description: '',
        })
    };


    render() {
        if(!this.state.display) {
            return null
        }

        return (
            <div>
                <form className='flex' onSubmit={this.handleSubmit}>
                    <div>
                        <label>Job Title</label>
                        <input type='text' name='jobTitle' onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Company</label>
                        <input type='text' name='companyTitle' onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Date</label>
                        <input type='date' name='date' onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Location</label>
                        <input type='text' name='location' onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea name='description' onChange={this.handleChange}></textarea>
                    </div>
                    <div>
                        <input type='submit'></input>
                        <button>Cancel</button>
                    </div>
                </form>


            </div>
        )
    }
}

export default WorkExpModal;