import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <>
    <header>
        <nav>
            <ul>
                <li><Link to="/admin/users">Users</Link></li>
                <li><Link to="/admin/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </header>
    <Outlet/>
    </>
  )
}
