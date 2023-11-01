import React from 'react'

function index() {
    sessionStorage['username']=null
    window.location.href='/login';
  return (
    <div>index</div>
  )
}

export default index