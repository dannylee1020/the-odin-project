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
                <div className='mt-20 flex flex-row justify-evenly'>
                    <div className='ml-3/4'></div>
                    <ExportBttn targetEl={this.elementRef}></ExportBttn>
                </div>
                <div className='content' ref={this.elementRef}>
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