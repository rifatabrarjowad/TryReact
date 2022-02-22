import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Wellcome extends Component {
    DoThisF(a) {
        alert(a)
    }
    render() {

        return <div>

            <button onClick={this.DoThisF.bind(this, 'I am from class')} className="btn btn-primary m-5"> Alert</button>
        </div>
    }
}
export default Wellcome;