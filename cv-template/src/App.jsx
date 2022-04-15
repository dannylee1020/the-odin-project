import React, { Component } from 'react';
import Header from './compoenents/Layout/Header'
import PersonalInfo from './compoenents/PersonalInfo'
import WorkHeading from './compoenents/Layout/WorkHeading'
import WorkHist from './compoenents/WorkExp/WorkHist'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className>
                <Header></Header>
                <PersonalInfo></PersonalInfo>
                <WorkHeading></WorkHeading>
                <WorkHist></WorkHist>
            </div>
        )
    }
}

export default App