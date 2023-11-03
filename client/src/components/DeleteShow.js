import axios from 'axios'
import React from 'react'

function DeleteShow(props) {
  return (
    <button type="button" className="btnDeleteMovie" onClick= {() => {
        axios.delete(`http://localhost:4000/api/show/${props.id}`).then((response=>{
           if(response)
           alert("Show Deleted Successfully")
        })).catch((err)=>{
           alert(err)
        })}}> Delete </button>
  )
}

export default DeleteShow