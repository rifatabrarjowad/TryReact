import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Welcome extends Component {

    constructor() {
        super()
        this.state = {
            name: "Rifat",
            age: [18, 20, 25]
        }
    }

    render() {

        return <div>

            <h1>{this.state.name} </h1>
            <h1>{this.state.age[1]} </h1>
        </div>
    }
}
export default Welcome;