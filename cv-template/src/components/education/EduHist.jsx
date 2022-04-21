import React, { Component } from 'react'
import EduHeading from '../layout/EduHeading';
import AddEdu from './AddEdu';
import EduModal from './EduModal';
import DisplayEdu from './DisplayEdu';

class EduHist extends Component {
    constructor(){
        super();

        this.state = {
            display: false,
            eduHistory:[]
        }

        this.displayModal = this.displayModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.removeHistory = this.removeHistory.bind(this);
    }

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

    addHistory = (eduHist) => {
        const newEduHist = eduHist
        this.setState({
            eduHistory: [...this.state.eduHistory, newEduHist]
        })
    }

    removeHistory = (id) => {
        const newHist = this.state.eduHistory.filter((edu) => edu.id !== id)
        this.setState({
            eduHistory: newHist
        })
    }

    render() {
        return (
            <div className='ml-16 w-2/3'>
                <EduHeading></EduHeading>
                <DisplayEdu educations={this.state.eduHistory} removeHist={this.removeHistory}></DisplayEdu>
                <EduModal display={this.state.display} addHist={this.addHistory} closeModal={this.closeModal}></EduModal>
                <AddEdu displayModal = {this.displayModal}></AddEdu>
            </div>
        )
    }
}

export default EduHist;