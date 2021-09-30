import React,{Component} from 'react'

class Wellcome extends Component{
    DoThisF(a){
        alert(a)
    }
    render(){

        return <div>
            <h1>Hello I am {this.props.name}. I am {this.props.age}</h1>
            <button onClick={this.DoThisF.bind(this,'I am from class')}> Alert</button>
        </div>
    }
}
export default Wellcome;