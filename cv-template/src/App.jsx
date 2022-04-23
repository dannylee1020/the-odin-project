import React, { Component } from 'react';
import Header from './components/layout/Header'
import PersonalInfo from './components/personal/PersonalInfo'
import WorkHeading from './components/layout/WorkHeading'
import WorkHist from './components/workexp/WorkHist'
import EduHist from './components/education/EduHist'
import ExportBttn from './components/layout/ExportBttn'

class App extends Component {
    constructor(props) {
        super(props);
        this.elementRef = React.createRef();
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className='mt-20 ml-[70%]'>
                    <ExportBttn targetEl={this.elementRef}></ExportBttn>
                </div>
                <div className='content ml-[25%] ' ref={this.elementRef}>
                    <PersonalInfo></PersonalInfo>
                    <WorkHeading></WorkHeading>
                    <WorkHist></WorkHist>
                    <EduHist></EduHist>
                </div>
            </div>
        )
    }
}

export default App;