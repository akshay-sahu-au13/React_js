import React from 'react';

class ClassComp extends React.Component {
    constructor() {
        super();
        this.state = {color:"red"};
    }

    render() {
        return <>
            <div className="container">
                <h1>This is a Class based Component</h1>
                <img src="https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80" alt="classCompimg" height="300"/>
            </div>
        
        </>
    }
}

export default ClassComp;