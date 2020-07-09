import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>
                {/* Note: he brackets are used after this.props.name since a function is passed as props */}
                {this.props.name(false)} 
            </div>
        )
    }
}

export default User