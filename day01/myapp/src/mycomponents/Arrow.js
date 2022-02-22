import React from 'react'

const Alertme = (a) => {
    return (alert(a))

}
const Arrow = () => {

    return (
        <div>

            <button className="btn btn-success m-5" onClick={Alertme.bind(this, 'Arrow Functaion Working')}> Alert</button>
        </div>

    );
}
export default Arrow