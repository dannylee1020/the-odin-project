import React, { Component } from 'react';
import Header from './components/layout/Header'
import PersonalInfo from './components/PersonalInfo'
import WorkHeading from './components/layout/WorkHeading'
import WorkHist from './components/workexp/WorkHist'

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