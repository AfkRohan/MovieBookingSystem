import React from 'react'
import Cookies from 'js-cookie';

function AdminLogout() {
  Cookies.remove('admin');
  window.location.href='/admin-login'
 return (
    <div>AdminLogout</div>
  )
}

export default AdminLogout