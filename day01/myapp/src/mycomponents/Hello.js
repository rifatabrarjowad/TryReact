import React from 'react'

function Hello(props) {
    function DoThis(a) {
        alert(a)
    }
    return (
        <div>

            <h1>Hello I am  {props.name} . I am {props.age}</h1>
            <button onClick={DoThis.bind(this,'I am from pera')}> Alert</button>
        </div>

    );
}
export default Hello