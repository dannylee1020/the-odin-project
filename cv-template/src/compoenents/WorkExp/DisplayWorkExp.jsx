import React, { Component } from 'react';
import WorkExp from './WorkExp';


class DisplayWorkExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            this.props.works.map((work) => {
                <WorkExp work={work}></WorkExp>
            })
        )
    }
};

export default DisplayWorkExp;
