import React from 'react'

function AdminLogout() {
  localStorage.removeItem('admin');
  window.location.href='/admin-login'
 return (
    <div>AdminLogout</div>
  )
}

export default AdminLogout