import axios from 'axios'
import React from 'react'

function DeleteButton(props) {
  return (
    <button type="button" className="btnDeleteMovie" onClick= {() => {
        axios.delete(`https://movie-booking-system-sable.vercel.app/api/movie/${props.id}`).then((response=>{
           if(response)
           alert("Movie Deleted Successfully")
        })).catch((err)=>{
           alert(err)
        })}}> Delete </button>
  )
}

export default DeleteButton