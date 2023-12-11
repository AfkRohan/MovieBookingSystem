import axios from 'axios'
import React from 'react'

function DeleteShow(props) {
  return (
    <button type="button" className="btnDeleteMovie" onClick= {() => {
        axios.delete(`https://movie-booking-system-sable.vercel.app/api/show/${props.id}`).then((response=>{
           if(response)
           alert("Show Deleted Successfully")
        })).catch((err)=>{
           alert(err)
        })}}> Delete </button>
  )
}

export default DeleteShow