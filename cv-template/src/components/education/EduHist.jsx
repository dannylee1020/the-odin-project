import React, { useState } from 'react';
import EduHeading from '../layout/EduHeading';
import EduModal from './EduModal';
import DisplayEdu from './DisplayEdu';


const EduHist = () => {
    const [display, setDisplay] = useState(false);
    const [eduHistory, setEduHistory] = useState([]);

    const displayModal = function() {
        setDisplay(true)
    }

    const closeModal = function () {
        setDisplay(false)
    }

    const addEduHist = function (eduHist) {
        setEduHistory((prevHist) => (
            [
                ...prevHist,
                eduHist
            ]
        ))
    }

    const removeHist = function (id) {
        let newHist = eduHistory.filter(hist => hist.id !== id)
        setEduHistory(newHist);
    }

    return (
        <div className='w-2/3'>
            <EduHeading></EduHeading>
            <DisplayEdu educations={eduHistory} removeHist={removeHist}></DisplayEdu>
            <EduModal display={display} addHist={addEduHist} closeModal={closeModal}></EduModal>
            <button className='mt-1 text-[#7B9ACC]' onClick={displayModal}>
                <span>+</span> Add Education
            </button>
        </div>
    )
}

export default EduHist;
