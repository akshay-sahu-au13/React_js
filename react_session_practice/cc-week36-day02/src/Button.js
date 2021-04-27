import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super();
        this.state = {}
    }

    render(){
        return (
            <button className={this.props.className ? this.props.className: "btn-1"}>{this.props.title}</button>
        )
    }
}