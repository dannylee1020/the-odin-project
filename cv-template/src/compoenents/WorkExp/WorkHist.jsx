import React, { Component } from 'react';
import WorkExpModal from './WorkExpModal';
import AddExp from './AddExp';
import DisplayWorkExp from './DisplayWorkExp';

class WorkHist extends Component {
    constructor() {
        super();

        this.state = {
            workHistory: [],
            display: false
        }

        this.addWorkHist = this.addWorkHist.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addWorkHist = (workHist) => {
        const newWorkHist = workHist
        this.setState({
            workHistory: [...this.state.workHistory, newWorkHist]
        })


    };

    displayModal = () => {
        this.setState({
            display: true
        })
    }

    closeModal = () => {
        this.setState({
            display:false
        })
    }


    render() {
        return (
            <div className='workSection ml-16'>
                <DisplayWorkExp works={this.state.workHistory}/>
                <WorkExpModal addWorkHist={this.addWorkHist} display={this.state.display} closeModal={this.closeModal}/>
                <AddExp displayModal={this.displayModal}/>
            </div>
        )
    }
}

export default WorkHist;

