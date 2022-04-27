import React, { useState } from 'react'
import WorkExpModal from './WorkExpModal';
import AddExp from './AddExp';
import DisplayWorkExp from './DisplayWorkExp';

const WorkHist = () => {
    const [workHistory, setWorkHistory] = useState([]);
    const [display, setDisplay] = useState(false)

    const addWorkHist = (workHist) => {
        setWorkHistory((prev) => ([
            ...prev,
            workHist
        ]))
    }

    const displayModal = () => {
        setDisplay(true)
    }

    const closeModal= () => {
        setDisplay(false)
    }

    const removeHistory = (id) => {
        const newHistory = workHistory.filter((hist) => hist.id !== id)
        setWorkHistory(newHistory)
    }


    return (
        <div className='workSection w-2/3'>
            <DisplayWorkExp works={workHistory} removeHistory = {removeHistory}/>
            <WorkExpModal addWorkHist={addWorkHist} display={display} closeModal={closeModal}/>
            <AddExp displayModal={displayModal}/>
        </div>
    )

}

export default WorkHist;

