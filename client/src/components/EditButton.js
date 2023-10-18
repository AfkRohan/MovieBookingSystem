import React from 'react'

function EditButton(props) {
  return (
    <button type="button" className="btnEditMovie" onClick= {() => {
        axios.put(`http://localhost:4000/api/movie/${props.id}`).then((response=>{
           if(response)
           alert("Movie Updated Successfully")
        })).catch((err)=>{
           alert(err)
        })}}> Edit </button>
  )
}

export default EditButton