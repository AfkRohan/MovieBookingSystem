import { Checkbox } from 'antd'
import React from 'react'

function SeatComponent(props) {
    
    return (props.isBooked==true ?  (<div > {props.SeatNumber} </div>) : ( <div> {props.SeatNumber} </div>));
}

export default SeatComponent;