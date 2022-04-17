import React, { Component } from 'react';
import WorkExp from './WorkExp';


class DisplayWorkExp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.works.map((work) => {
                return <WorkExp key={work.id} work={work}/>
            })
        );
    }
};

export default DisplayWorkExp;
