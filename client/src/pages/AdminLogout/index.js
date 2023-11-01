import React from 'react'

function AdminLogout() {
 sessionStorage['admin']=null
 window.location.href='/admin-login';
 return (
    <div>AdminLogout</div>
  )
}

export default AdminLogout