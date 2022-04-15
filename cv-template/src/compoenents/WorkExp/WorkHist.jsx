import React, { Component } from 'react';
// import WorkHeading from '../Layout/WorkHeading'
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


    render() {
        return (
            <div>
                <DisplayWorkExp works={this.state.workHistory}></DisplayWorkExp>
                <WorkExpModal addExp={this.addWorkHist} display={this.state.display}></WorkExpModal>
                <AddExp onClick={this.displayModal}></AddExp>
            </div>
        )
    }
}

export default WorkHist;

