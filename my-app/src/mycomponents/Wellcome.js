import React,{Component} from 'react'

class Wellcome extends Component{
    render(){
        return <h1>Hello I am {this.props.name}. I am {this.props.age}</h1>
    }
}
export default Wellcome;