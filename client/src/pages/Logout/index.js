import Cookies from 'js-cookie'
import React from 'react'

function Logout() {
    Cookies.remove('username')
    window.location.href='/'
  return (
    <div>Logout</div>
  )
}

export default Logout