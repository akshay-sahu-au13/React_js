import { Component } from 'react';

export default class Post extends Component { 
    
    render() {
        return <>
            <div className="post">
                <h4>{this.props.data.title}</h4>
                <p>{this.props.data.body}</p>

            </div>
        </>
    }

 }