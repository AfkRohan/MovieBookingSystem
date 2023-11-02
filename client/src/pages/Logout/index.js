import React from 'react'

function Logout() {
    localStorage.removeItem('username')
    window.location.href='/'
  return (
    <div>Logout</div>
  )
}

export default Logout