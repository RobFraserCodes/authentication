import React from 'react'

export default function NavBar() {
  return (
    <nav className='flex justify-between p-8 bg-slate-200'>
        <ul className='flex space-x-8'>
            <li><a href="/">Home</a></li>
            <li><a href="/protected/client">Client</a></li>
            <li><a href="/protected/server">Server</a></li>
            </ul>
            <button>
                <a href="/api/auth/signout">Sign out</a>
            </button>
    </nav>
  )
}
