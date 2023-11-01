import axios from 'axios'
import React from 'react'

function DeleteButton(props) {
  return (
    <button type="button" className="btnDeleteMovie" onClick= {() => {
        axios.delete(`http://localhost:4000/api/movie/${props.id}`).then((response=>{
           if(response)
           alert("Movie Deleted Successfully")
        })).catch((err)=>{
           alert(err)
        })}}> Delete </button>
  )
}

export default DeleteButton