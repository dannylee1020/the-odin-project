import React, { Component } from 'react';
import './App.css'
import Header from './compoenents/Header';
import PersonalInfo from './compoenents/PersonalInfo'

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header></Header>
                <PersonalInfo></PersonalInfo>
            </div>
        )
    }
}

export default App