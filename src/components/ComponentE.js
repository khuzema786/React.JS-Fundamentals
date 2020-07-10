import React, { Component } from 'react'
import ComponentF from './ComponentF'
import { UserContext } from './UserContext'

export class ComponentE extends Component {

    // This UserContext can be accessed in the componenent using this operator
    static contextType = UserContext
	render() {
		return (
			<div>
                Compenent E context {this.context} 
				<ComponentF/>
			</div>
		)
	}
}

// This UserContext can be accessed in the componenent using this operator
// ComponentE.contextType = UserContext

export default ComponentE