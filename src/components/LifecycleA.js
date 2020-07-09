import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Khuzema'
        }
        console.log('LifecycleA constructor')
    }

    // Cmponent Mounting Lifecycle
    // --- static function can be accessed without the object or instance of the class being created, unlike normal functions
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    // Component Update Lifecycle

    shouldComponentUpdate() {
		console.log('LifecycleA shouldComponentUpdate')
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('LifecycleA componentDidUpdate')
	}

	changeState = () => {
        console.log('Entered the change state block')
		this.setState({
			name: 'Khomosi'
		})
	}

    
    render() {
        console.log('LifecyleA render')
        return (
            <div>
                <div>LifecycleA</div>
                <button onClick={this.changeState}>Change State</button>              
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA

// --- Output in console --- A-Parent Component, B-Child Component

// -> A-constructor
// -> A-getDerivedStateFromProps
// -> A-render
// -> B-Constructor
// -> B-getDerivedStateFromProps
// -> B-render
// -> B-componentDidMount
// -> A-componentDidMount

// After Clicking Change State Button---

// -> Entered Change State Block
// -> A-getDerivedStateFromProps
// -> A-ShouldComponentUpdate
// -> A-render
// -> B-getDerivedStateFromProps
// -> B-shouldComponentUpdate
// -> B-render
// -> B-getSnapshotBeforeUpdate
// -> A-getSnapshotBeforeUpdate
// -> B-componentDidUpdate
// -> A-componentDidUpdate
