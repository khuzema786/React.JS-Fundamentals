import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.componentRef=React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                {/* This Input is imported from Input.js --- Also keep in mind that 
                Refs can only be attatched to Class Component and not Functional Component */}
                <Input ref={this.componentRef} /> 
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
