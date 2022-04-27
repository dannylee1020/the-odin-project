import React from 'react'
import WorkExp from './WorkExp';

const DisplayWorkExp = (props) => {
    const works = props.works

    return (
        works.map((work) => {
            return <WorkExp key={work.id} work={work} removeHistory={props.removeHistory}></WorkExp>
        })
    )
}

export default DisplayWorkExp;
