import React, { Component } from 'react'

class LifecycleB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Khuzema'
        }
        console.log('LifecycleB constructor')
    }

    // --- static function can be accessed without the object or instance of the class being created, unlike normal functions
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    // Component Update Lifecycle
    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifecyleB render')
        return (
            <div>
                <div>LifecycleB</div>
            </div>
        )
    }
}

export default LifecycleB

