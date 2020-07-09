import React, { Component } from 'react'

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true } // Can be used to create a fallback UI
	}

	// Gives info related to error
	componentDidCatch(error, info) {
		console.log(error)
		console.log(info)
	}

	render() {
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary