import React, { Component } from 'react'

export class RefsDemo extends Component {
	constructor(props) {
		super(props)
		this.inputRef = React.createRef() // Approach 1 Preferred--- Creates a Ref object
		this.cbRef = null // cbRef --- Callback Ref --- Approach 2
		this.setCbRef = element => {
			this.cbRef = element
		}
	}

	componentDidMount() {
		// this.inputRef.current.focus() --- For focusing on Input element of Approach 1
		console.log(this.cbRef)
		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	clickHandler = () => {
        alert(this.inputRef.current.value)
	}

	render() {
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
				<button onClick={this.clickHandler}>Click</button>
			</div>
		)
	}
}

export default RefsDemo