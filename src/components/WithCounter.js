import React from 'react'

// const UpdatedComponent = OriginalComponent => {
//     class NewComponent extends React.Component {
//         render() {
//             return (
//                 <div>
//                     <OriginalComponent name='Khuzema' />
//                 </div>
//             )
//         }
//     } 
//     return NewComponent   
// }

// export default UpdatedComponent

const WithCounter = (WrappedComponent, incrementNumber) => {
	class WithCounter extends React.Component {
		constructor(props) {
			super(props)

			this.state = {
				count: 0
			}
		}

		incrementCount = () => {
			this.setState(prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}
    render() {
      console.log('HOC', this.props.name)
			return (
                // Is ClickCounter & HoverCounter component accordingly
				<WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    {...this.props}    // ---> Use of spread operator to pass down the rest of the props (In our case this.props.name) after adding count and incrementCount properties
				/>
			)
		}
	}
	return WithCounter
}

export default WithCounter