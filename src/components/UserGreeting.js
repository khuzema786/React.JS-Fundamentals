import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            // isLoggedin: false
             isLoggedin: true
        }
    }
    
    render() {

        return this.state.isLoggedin && <div>Welcome Khuzema</div> // --- Aprroach 4 Short circuit operator, Specifically used if you want to return null when certain condition is false

        // ---- Approach 3 ternary conditional operator,  Preferred because can be used inside JSX----
        // return this.state.isLoggedin ? (
        //     <div>Welcome Khuzema</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // ---- Approach 2 ----
        // let message
        // if (this.state.isLoggedin) {
        //     message= <div>Welcome Khuzema</div>
        // } else {
        //     message= <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // ---- Approach 1 ----
        // if (this.state.isLoggedin) {
        //     return (
        //         <div>Welcome Khuzema</div>
        //     )
        // } else {
        //     return <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         <div>
        //             welcome khuzema
        //         </div>
        //         <div>
        //             welcome guest
        //         </div>
        //     </div>
        // )
    }
}

export default UserGreeting
