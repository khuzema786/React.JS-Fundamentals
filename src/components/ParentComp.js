import React, { Component } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Khuzema'
        }
    }

    componentDidMount() {
        setInterval(() => {
           this.setState({
               name: 'Khuzema'  // Note, prev state name and setState name are same
           }) 
        }, 2000);
    }
    
    render() {
        console.log('Parent Component render')
        return (
            <div>
                Parent Component
                ---Pure Memo Functional Component will be rendered once---
                <MemoComp name={this.state.name} /> 
                ---Pure Class Component will be rendered once---
                <PureComp name={this.state.name} />
                ---Will be re-rendered after every 2 seconds---
                <RegComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp

//  --- Refer this video ---
// https://www.youtube.com/watch?v=YCRuTT31qR0&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=26

// Pure component is just rendered once, unlike 
// Regular and ParentComp that are re-rendered after every 2 seconds

// A regular component does not implement shouldComponentUpdate method. 
// It always return true by default. 

// A pure component on otherhand implements shouldComponentUpdate with shallow props &
// state comparison. 
// If there is no difference, props and state is not-rerendered, providing a performance boost.
