import React, { Component } from 'react';
import Header from './compoenents/layout/Header'
import PersonalInfo from './compoenents/PersonalInfo'
import WorkHeading from './compoenents/layout/WorkHeading'
import WorkHist from './compoenents/workexp/WorkHist'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header></Header>
                <PersonalInfo></PersonalInfo>
                <WorkHeading></WorkHeading>
                <WorkHist></WorkHist>
            </div>
        )
    }
}

export default App;