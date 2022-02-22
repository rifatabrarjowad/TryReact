import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Btncng extends Component {

    constructor() {
        super()
        this.state = {
            name: "Rifat",
            age: [18, 20, 25]
        }
    }

    render() {
        function Dothis(a) {
            this.setState({ name: a })
        }
        return <div>

            <h1>{this.state.name} </h1>
            <button onClick={Dothis.bind(this, "My Name Is Rifat")}>ok </button>
        </div>
    }
}
export default Btncng;